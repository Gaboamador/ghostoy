import { useEffect, useMemo, useState } from 'react';
import {
  HiCheck,
  HiOutlineCube,
  HiOutlineLocationMarker,
  HiOutlineSparkles,
} from 'react-icons/hi';

import { useProgress } from '../../context/ProgressContext';
import LocationDetails from '../../components/LocationDetails';
import { builds } from '../../data/builds';
import { getEntityMapData } from '../../data/ghostOfYoteiSelectors';
import styles from './MissingPage.module.scss';

const FILTERS = [
  { id: 'all', label: 'Todo' },
  { id: 'charm', label: 'Charms' },
  { id: 'armor', label: 'Armaduras' },
];

const normalize = (value = '') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase();

const AREA_RULES = [
  { name: 'Yōtei Grasslands', terms: ['yotei grasslands', 'mount yotei', 'blooming ridge', 'grassy hill', 'lake view', 'old stables', 'kuttara', 'flowing water', 'reliquary of courage'] },
  { name: 'Ishikari Plains', terms: ['ishikari plain', 'winding tears', "oni's breath", 'fire fox', 'twin path', 'bold kaji', 'broken horn', 'the oni quest', 'ishikari market gambling den'] },
  { name: 'Teshio Ridge', terms: ['teshio ridge', 'enduring hold', 'chilled peak', 'kitsune shrine', 'bifuka', 'high wall', 'soya port', 'winter farms'] },
  { name: 'Tokachi Range', terms: ['tokachi range', 'amber respite', 'faithful leap', 'red crane', 'warm plains', 'whispering woods', 'marshland', 'flower for your thoughts'] },
  { name: 'Nayoro Wilds', terms: ['nayoro wilds', 'patient frost', 'risen fog', 'clear water', 'opusnupuri', 'face of a demon', 'face of a master'] },
  { name: 'Oshima Coast', terms: ['oshima coast', 'budding grace', 'benten inn', 'blushing forest', 'nakajima sake house'] },
];

const SPECIAL_SOURCE_RULES = [
  { name: 'Merchants', terms: ['taro the scavenger', 'masujiro the melodious'] },
  { name: 'Takezo’s Duels', terms: ['dueling tree', 'disciple of takezo', "takezo's disciple"] },
  { name: 'Story & Gift Altars', terms: ['onryo gift altar', 'starter gear', 'story progression'] },
  { name: 'Special Editions & Promotions', terms: ['deluxe edition', 'sapporo beer'] },
];

const ROUTE_ORDER = [
  'Yōtei Grasslands',
  'Ishikari Plain',
  'Tokachi Range',
  'Nayoro Wilds',
  'Teshio Ridge',
  'Oshima Coast',
  ...SPECIAL_SOURCE_RULES.map((rule) => rule.name),
  'Other & Unspecified',
];

const getRouteOrder = (area) => {
  const index = ROUTE_ORDER.indexOf(area);
  return index === -1 ? ROUTE_ORDER.length - 1 : index;
};

const getFallbackSearchArea = (item) => {
  const source = normalize(item.howToGet);
  const area = AREA_RULES.find((rule) => rule.terms.some((term) => source.includes(term)));

  if (area) return area.name;

  const specialSource = SPECIAL_SOURCE_RULES
    .find((rule) => rule.terms.some((term) => source.includes(term)));

  return specialSource?.name ?? 'Other & Unspecified';
};

const getSearchArea = (entry) => {
  const regionNames = entry.mapData.regions.map((region) => region.title);

  if (regionNames.length === 1) return regionNames[0];
  if (regionNames.length > 1) return regionNames.join(' / ');

  return getFallbackSearchArea(entry.item);
};

const getMapReference = (entry) => [
  ...entry.mapData.relatedLocations,
  ...entry.mapData.locations,
]
  .map((location) => location.title)
  .filter((title) => normalize(title) !== normalize(entry.item.name))
  .filter((title, index, titles) => titles.indexOf(title) === index)
  .join(' · ');

const compareByMapPosition = (first, second) => {
  const firstPosition = first.mapData.locations[0]?.coordinates;
  const secondPosition = second.mapData.locations[0]?.coordinates;

  if (!firstPosition && !secondPosition) return first.item.name.localeCompare(second.item.name);
  if (!firstPosition) return 1;
  if (!secondPosition) return -1;

  return secondPosition.lat - firstPosition.lat
    || firstPosition.lng - secondPosition.lng
    || first.item.name.localeCompare(second.item.name);
};

export default function MissingPage() {
  const {
    isArmorObtained,
    isCharmObtained,
    toggleArmor,
    toggleCharm,
  } = useProgress();
  const [selectedIds, setSelectedIds] = useState([]);
  const [kind, setKind] = useState('all');
  const [sharedOnly, setSharedOnly] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  const selectedBuilds = useMemo(
    () => builds.filter((build) => selectedIds.includes(build.id)),
    [selectedIds],
  );

  const missing = useMemo(() => {
    const consolidated = new Map();

    const add = (item, itemKind, build) => {
      const key = `${itemKind}:${item.id}`;

      if (!consolidated.has(key)) {
        consolidated.set(key, {
          item,
          kind: itemKind,
          builds: [],
          mapData: getEntityMapData(itemKind, item.id),
        });
      }

      consolidated.get(key).builds.push(build);
    };

    selectedBuilds.forEach((build) => {
      if (!isArmorObtained(build.armor.id)) {
        add(build.armor, 'armor', build);
      }

      build.charms
        .filter((charm) => !isCharmObtained(charm.id))
        .forEach((charm) => add(charm, 'charm', build));
    });

    return [...consolidated.values()]
      .filter((entry) => kind === 'all' || entry.kind === kind)
      .filter((entry) => !sharedOnly || entry.builds.length > 1)
      .sort((a, b) => (
        b.builds.length - a.builds.length
        || a.item.name.localeCompare(b.item.name)
      ));
  }, [
    kind,
    isArmorObtained,
    isCharmObtained,
    selectedBuilds,
    sharedOnly,
  ]);

  const toggleBuild = (id) => setSelectedIds((current) => (
    current.includes(id) ? current.filter((buildId) => buildId !== id) : [...current, id]
  ));

  const markObtained = (entry) => (
    entry.kind === 'armor'
      ? toggleArmor(entry.item.id)
      : toggleCharm(entry.item.id)
  );

  const sharedCount = missing.filter((entry) => entry.builds.length > 1).length;

  const groupedMissing = useMemo(() => {
    const groups = new Map();

    missing.forEach((entry) => {
      const area = getSearchArea(entry);
      if (!groups.has(area)) groups.set(area, []);
      groups.get(area).push(entry);
    });

    return [...groups.entries()]
      .map(([area, entries]) => ({ area, entries: [...entries].sort(compareByMapPosition) }))
      .sort((first, second) => (
        getRouteOrder(first.area) - getRouteOrder(second.area)
      ));
  }, [missing]);

  useEffect(() => setCopyStatus(''), [groupedMissing]);

  const copyRoute = async () => {
    const route = groupedMissing.map(({ area, entries }) => [
      area,
      ...entries.map((entry) => (
        `- ${entry.item.name} — ${entry.item.howToGet}${getMapReference(entry) ? ` [Mapa: ${getMapReference(entry)}]` : ''} (${entry.builds.length} ${entry.builds.length === 1 ? 'build' : 'builds'})`
      )),
    ].join('\n')).join('\n\n');

    try {
      await navigator.clipboard.writeText(route);
      setCopyStatus('Ruta copiada');
    } catch {
      setCopyStatus('No se pudo copiar');
    }
  };

  return (
    <section className="page">
      <header className="pageHeader">
        <span className="eyebrow">Planificador de búsqueda</span>
        <h1>Faltantes</h1>
        <p className="muted">
          Combiná builds y obtené una sola lista, sin elementos repetidos.
        </p>
      </header>

      <section className={styles.selector}>
        <div className={styles.sectionHeader}>
          <div>
            <span className="eyebrow">Paso 1</span>
            <h2>Elegí tus builds</h2>
          </div>
          <div className={styles.actions}>
            <button
              className="button button--secondary"
              onClick={() => setSelectedIds(builds.map((build) => build.id))}
            >
              Todos
            </button>
            <button
              className="button button--secondary"
              onClick={() => setSelectedIds([])}
            >
              Limpiar
            </button>
          </div>
        </div>
        <div className={styles.buildGrid}>
          {builds.map((build) => {
            const selected = selectedIds.includes(build.id);

            return (
              <button
                key={build.id}
                className={`${styles.buildChoice} ${selected ? styles.selected : ''}`}
                onClick={() => toggleBuild(build.id)}
                aria-pressed={selected}
              >
                <span className={styles.checkbox}>{selected && <HiCheck />}</span>
                <span>
                  <strong>{build.armor.name}</strong>
                  <small>{build.category}</small>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {selectedBuilds.length === 0 ? (
        <div className={styles.emptyState}>
          <HiOutlineSparkles />
          <h2>Seleccioná al menos un build</h2>
          <p>La lista mostrará solamente los elementos que todavía no tenés.</p>
        </div>
      ) : (
        <>
          <section className={styles.summary}>
            <div><strong>{selectedBuilds.length}</strong><span>builds</span></div>
            <div><strong>{missing.length}</strong><span>objetivos visibles</span></div>
            <div><strong>{sharedCount}</strong><span>compartidos</span></div>
            <div><strong>{groupedMissing.length}</strong><span>zonas o fuentes</span></div>
          </section>

          <section className={styles.results}>
            <div className={styles.sectionHeader}>
              <div>
                <span className="eyebrow">Paso 2</span>
                <h2>Ruta de búsqueda</h2>
              </div>
              <button
                className="button button--secondary"
                onClick={copyRoute}
                disabled={missing.length === 0}
              >
                {copyStatus || 'Copiar ruta'}
              </button>
            </div>

            <div className={styles.filters}>
              {FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  className={`button ${kind === filter.id ? '' : 'button--secondary'}`}
                  onClick={() => setKind(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
              <label className={styles.sharedToggle}>
                <input
                  type="checkbox"
                  checked={sharedOnly}
                  onChange={(event) => setSharedOnly(event.target.checked)}
                />
                Solo compartidos
              </label>
            </div>

            {missing.length === 0 ? (
              <p className="empty">No hay faltantes con estos filtros.</p>
            ) : (
              <div className={styles.route}>
                {groupedMissing.map(({ area, entries }) => (
                  <section key={area} className={styles.areaGroup}>
                    <header className={styles.areaHeader}>
                      <div>
                        <HiOutlineLocationMarker />
                        <h3>{area}</h3>
                      </div>
                      <span>{entries.length} {entries.length === 1 ? 'objetivo' : 'objetivos'}</span>
                    </header>

                    <div className={styles.missingList}>
                      {entries.map((entry) => (
                        <article
                          key={`${entry.kind}:${entry.item.id}`}
                          className={styles.missingItem}
                        >
                          <div className={styles.itemIcon}>
                            {entry.kind === 'armor'
                              ? <HiOutlineCube />
                              : <HiOutlineSparkles />}
                          </div>
                          <div className={styles.itemBody}>
                            <div className={styles.itemHeading}>
                              <div>
                                <span className="badge">
                                  {entry.kind === 'armor' ? 'Armadura' : entry.item.type}
                                </span>
                                <h3>{entry.item.name}</h3>
                              </div>
                              <span className={styles.impact}>
                                {entry.builds.length} {entry.builds.length === 1 ? 'build' : 'builds'}
                              </span>
                            </div>
                            <p className={styles.location}>
                              <HiOutlineLocationMarker />
                              <span>{entry.item.howToGet}</span>
                            </p>
                            {getMapReference(entry) && (
                              <small>
                                Referencia del mapa: {getMapReference(entry)}
                              </small>
                            )}
                            <p>
                              {entry.kind === 'armor'
                                ? entry.item.perkFocus
                                : entry.item.effect}
                            </p>
                            <small>
                              Sirve para: {entry.builds.map((build) => build.category).join(' · ')}
                            </small>
                            <LocationDetails
                              entityType={entry.kind}
                              appId={entry.item.id}
                              compact
                            />
                          </div>
                          <button
                            className={styles.obtainButton}
                            onClick={() => markObtained(entry)}
                          >
                            <HiCheck />
                            <span>Ya lo tengo</span>
                          </button>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </section>
  );
}
