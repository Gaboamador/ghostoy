import { useMemo, useState } from 'react';

import ItemRow from '../../components/ItemRow';
import { useProgress } from '../../context/ProgressContext';
import { armors } from '../../data/armors';
import { charms } from '../../data/charms';
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

export default function CollectionPage() {
  const { progress, toggleCharm, toggleArmor } = useProgress();
  const [query, setQuery] = useState('');
  const [type, setType] = useState('Todos');
  const [slot, setSlot] = useState('Todos');
  const [status, setStatus] = useState('Todos');
  const [tab, setTab] = useState('charms');

  const types = useMemo(
    () => ['Todos', ...new Set(charms.map((charm) => charm.type).sort())],
    [],
  );

  const items = tab === 'charms' ? charms : armors;
  const obtainedIds = tab === 'charms'
    ? progress.obtainedCharms
    : progress.obtainedArmors;

  const filteredItems = useMemo(() => items.filter((item) => {
    const matchesType = tab === 'armors' || type === 'Todos' || item.type === type;
    const matchesSlot = tab === 'armors' || slot === 'Todos' || item.slot === slot;
    const isObtained = obtainedIds.includes(item.id);
    const matchesStatus = status === 'Todos'
      || (status === 'Obtenidos' && isObtained)
      || (status === 'Faltantes' && !isObtained);

    return includesQuery(item, query) && matchesType && matchesSlot && matchesStatus;
  }), [items, obtainedIds, query, slot, status, tab, type]);

  const changeTab = (nextTab) => {
    setTab(nextTab);
    setQuery('');
    setType('Todos');
    setSlot('Todos');
    setStatus('Todos');
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

        {tab === 'charms' && (
          <div className={styles.filterGrid}>
            <select
              className="input"
              value={type}
              onChange={(event) => setType(event.target.value)}
              aria-label="Filtrar por tipo"
            >
              {types.map((value) => <option key={value}>{value}</option>)}
            </select>
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
          </div>
        )}

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
          />
        ))}
      </div>
    </section>
  );
}
