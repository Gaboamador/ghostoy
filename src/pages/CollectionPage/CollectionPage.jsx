import { useMemo, useState } from 'react';

import ItemRow from '../../components/ItemRow';
import { useProgress } from '../../context/ProgressContext';
import {
  armors,
  charms,
  getEntityMapData,
  ghostOfYoteiDb,
} from '../../data/ghostOfYoteiSelectors';
import { getCompletedIds } from '../../services/progressEntries';
import styles from './CollectionPage.module.scss';

const normalize = (value = '') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase();

const includesQuery = (item, query) => {
  const searchableText = [
    item.name,
    item.effect,
    item.howToGet,
    item.perkFocus,
    ...(item.effects ?? []),
  ]
    .filter(Boolean)
    .join(' ');

  return normalize(searchableText).includes(normalize(query));
};

const SLOT_ORDER = { Major: 0, Minor: 1 };

const sortCollection = (items, tab) => [...items].sort((first, second) => {
  if (tab === 'charms') {
    const slotDifference = SLOT_ORDER[first.slot] - SLOT_ORDER[second.slot];
    if (slotDifference !== 0) return slotDifference;
  }

  return first.name.localeCompare(second.name, 'en', { sensitivity: 'base' });
});

export default function CollectionPage() {
  const { progress, toggleCharm, toggleArmor } = useProgress();
  const [query, setQuery] = useState('');
  const [type, setType] = useState('Todos');
  const [slot, setSlot] = useState('Todos');
  const [status, setStatus] = useState('Todos');
  const [region, setRegion] = useState('Todas');
  const [dataQuality, setDataQuality] = useState('Todos');
  const [tab, setTab] = useState('charms');

  const types = useMemo(
    () => ['Todos', ...new Set(charms.map((charm) => charm.type).sort())],
    [],
  );

  const items = tab === 'charms' ? charms : armors;
  const obtainedIds = tab === 'charms'
    ? getCompletedIds(progress, 'charm')
    : getCompletedIds(progress, 'armor');
  const sortedItems = useMemo(() => sortCollection(items, tab), [items, tab]);

  const filteredItems = useMemo(() => sortedItems.filter((item) => {
    const matchesType = tab === 'armors' || type === 'Todos' || item.type === type;
    const matchesSlot = tab === 'armors' || slot === 'Todos' || item.slot === slot;
    const isObtained = obtainedIds.includes(item.id);
    const matchesStatus = status === 'Todos'
      || (status === 'Obtenidos' && isObtained)
      || (status === 'Faltantes' && !isObtained);
    const mapData = getEntityMapData(tab === 'charms' ? 'charm' : 'armor', item.id);
    const matchesRegion = region === 'Todas'
      || mapData.regions.some((itemRegion) => itemRegion.title === region);
    const hasMarker = mapData.locations.length > 0;
    const matchesDataQuality = dataQuality === 'Todos'
      || (dataQuality === 'Confirmados' && hasMarker)
      || (dataQuality === 'Respaldo' && !hasMarker);

    return includesQuery(item, query)
      && matchesType
      && matchesSlot
      && matchesStatus
      && matchesRegion
      && matchesDataQuality;
  }), [dataQuality, obtainedIds, query, region, slot, sortedItems, status, tab, type]);

  const changeTab = (nextTab) => {
    setTab(nextTab);
    setQuery('');
    setType('Todos');
    setSlot('Todos');
    setStatus('Todos');
    setRegion('Todas');
    setDataQuality('Todos');
  };

  const toggleItem = (item) => {
    if (tab === 'charms') toggleCharm(item.id);
    else toggleArmor(item.id);
  };

  return (
    <section className="page">
      <header className="pageHeader">
        <span className="eyebrow">Tu inventario</span>
        <h1>Colección</h1>
        <p className="muted">
          {filteredItems.length} de {items.length} elementos
        </p>
      </header>

      <div className="stack">
        <div className={styles.tabs}>
          <button
            className={`button ${tab === 'charms' ? '' : 'button--secondary'}`}
            onClick={() => changeTab('charms')}
          >
            Charms
          </button>
          <button
            className={`button ${tab === 'armors' ? '' : 'button--secondary'}`}
            onClick={() => changeTab('armors')}
          >
            Armaduras
          </button>
        </div>

        <input
          className="input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={`Buscar ${tab === 'charms' ? 'charm' : 'armadura'}…`}
        />

        <div className={`${styles.filterGrid} ${tab === 'armors' ? styles.singleFilter : ''}`}>
          {tab === 'charms' && (
            <>
              <label className={styles.filterField}>
                <span>Tipo</span>
                <select
                  className="input"
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                  aria-label="Filtrar por tipo"
                >
                  {types.map((value) => <option key={value}>{value}</option>)}
                </select>
              </label>
              <label className={styles.filterField}>
                <span>Slot</span>
                <select
                  className="input"
                  value={slot}
                  onChange={(event) => setSlot(event.target.value)}
                  aria-label="Filtrar por slot"
                >
                  <option>Todos</option>
                  <option>Major</option>
                  <option>Minor</option>
                </select>
              </label>
            </>
          )}

          <label className={`${styles.filterField} ${styles.statusField}`}>
            <span>Estado</span>
            <select
              className="input"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              aria-label="Filtrar por estado"
            >
              <option>Todos</option>
              <option>Obtenidos</option>
              <option>Faltantes</option>
            </select>
          </label>

          <label className={styles.filterField}>
            <span>Región</span>
            <select
              className="input"
              value={region}
              onChange={(event) => setRegion(event.target.value)}
              aria-label="Filtrar por región"
            >
              <option>Todas</option>
              {ghostOfYoteiDb.regions.map((itemRegion) => (
                <option key={itemRegion.id}>{itemRegion.title}</option>
              ))}
            </select>
          </label>

          <label className={styles.filterField}>
            <span>Datos</span>
            <select
              className="input"
              value={dataQuality}
              onChange={(event) => setDataQuality(event.target.value)}
              aria-label="Filtrar por calidad de datos"
            >
              <option>Todos</option>
              <option>Confirmados</option>
              <option>Respaldo</option>
            </select>
          </label>
        </div>

        {filteredItems.length === 0 && (
          <p className="empty">No hay resultados con estos filtros.</p>
        )}

        {filteredItems.map((item) => (
          <ItemRow
            key={item.id}
            item={item}
            checked={obtainedIds.includes(item.id)}
            onToggle={() => toggleItem(item)}
            subtitle={tab === 'charms' ? `${item.slot} · ${item.type}` : item.perkFocus}
            entityType={tab === 'charms' ? 'charm' : 'armor'}
          />
        ))}
      </div>
    </section>
  );
}
