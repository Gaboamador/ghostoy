import { useMemo, useState } from 'react';
import { HiCheck, HiOutlineCube, HiOutlineSparkles } from 'react-icons/hi';

import { useProgress } from '../../context/ProgressContext';
import { builds } from '../../data/builds';
import styles from './MissingPage.module.scss';

const FILTERS = [
  { id: 'all', label: 'Todo' },
  { id: 'charm', label: 'Charms' },
  { id: 'armor', label: 'Armaduras' },
];

export default function MissingPage() {
  const { progress, toggleArmor, toggleCharm } = useProgress();
  const [selectedIds, setSelectedIds] = useState([]);
  const [kind, setKind] = useState('all');
  const [sharedOnly, setSharedOnly] = useState(false);

  const selectedBuilds = useMemo(
    () => builds.filter((build) => selectedIds.includes(build.id)),
    [selectedIds],
  );

  const missing = useMemo(() => {
    const consolidated = new Map();

    const add = (item, itemKind, build) => {
      const key = `${itemKind}:${item.id}`;

      if (!consolidated.has(key)) {
        consolidated.set(key, { item, kind: itemKind, builds: [] });
      }

      consolidated.get(key).builds.push(build);
    };

    selectedBuilds.forEach((build) => {
      if (!progress.obtainedArmors.includes(build.armor.id)) {
        add(build.armor, 'armor', build);
      }

      build.charms
        .filter((charm) => !progress.obtainedCharms.includes(charm.id))
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
    progress.obtainedArmors,
    progress.obtainedCharms,
    selectedBuilds,
    sharedOnly,
  ]);

  const toggleBuild = (id) => setSelectedIds((current) => (
    current.includes(id) ? current.filter((buildId) => buildId !== id) : [...current, id]
  ));

  const markObtained = (entry) => (
    entry.kind === 'armor' ? toggleArmor(entry.item.id) : toggleCharm(entry.item.id)
  );

  const sharedCount = missing.filter((entry) => entry.builds.length > 1).length;

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
          </section>

          <section className={styles.results}>
            <div className={styles.sectionHeader}>
              <div>
                <span className="eyebrow">Paso 2</span>
                <h2>Plan de búsqueda</h2>
              </div>
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
              <div className={styles.missingList}>
                {missing.map((entry) => (
                  <article
                    key={`${entry.kind}:${entry.item.id}`}
                    className={styles.missingItem}
                  >
                    <div className={styles.itemIcon}>
                      {entry.kind === 'armor' ? <HiOutlineCube /> : <HiOutlineSparkles />}
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
                      <p>
                        {entry.kind === 'armor' ? entry.item.perkFocus : entry.item.effect}
                      </p>
                      <small>
                        Sirve para: {entry.builds.map((build) => build.category).join(' · ')}
                      </small>
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
            )}
          </section>
        </>
      )}
    </section>
  );
}
