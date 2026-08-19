import { useEffect, useMemo, useState } from 'react';
import {
  HiCheck,
  HiExternalLink,
  HiOutlineLocationMarker,
  HiOutlinePhotograph,
  HiOutlineSearch,
  HiViewGrid,
  HiViewList,
} from 'react-icons/hi';

import { useProgress } from '../../context/ProgressContext';
import { exploreLocations } from '../../data/exploreCatalog';
import {
  getCategoryById,
  getCompatibilityByLocationId,
  getLocationById,
  getRegionById,
  ghostOfYoteiDb,
} from '../../data/ghostOfYoteiSelectors';
import styles from './ExplorePage.module.scss';

const PAGE_SIZE = 48;

const normalize = (value = '') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase();

const cleanDescription = (description = '') => description
  .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
  .replace(/[*_#>`]/g, '')
  .trim();

const mapUrl = (locationId) => (
  `https://mapgenie.io/ghost-of-yotei/maps/yotei?locationIds=${locationId}`
);

function LocationCard({ location, completed, onToggle }) {
  const category = getCategoryById(location.categoryId);
  const region = getRegionById(location.regionId);
  const relatedLocations = location.relatedLocationIds.map(getLocationById).filter(Boolean);
  const description = cleanDescription(location.description);
  const images = location.media.filter((item) => item.type === 'image').slice(0, 3);

  return (
    <article className={`${styles.locationCard} ${completed ? styles.completedCard : ''}`}>
      <div className={styles.locationHeading}>
        <div>
          <span className="badge">{category?.label ?? location.categoryKey}</span>
          <h3>{location.title}</h3>
          <span className={styles.cardRegion}>
            <HiOutlineLocationMarker /> {region?.title ?? 'Fuentes especiales'}
          </span>
        </div>
        {!location.isCatalogEntry && (
          <a className={styles.mapButton} href={mapUrl(location.id)} target="_blank" rel="noreferrer" aria-label={`Abrir ${location.title} en el mapa`}>
            <HiExternalLink />
          </a>
        )}
      </div>

      {description && <p>{description}</p>}

      {relatedLocations.length > 0 && (
        <div className={styles.related}>
          <strong>Relacionado con</strong>
          <div>
            {relatedLocations.map((related) => (
              <a key={related.id} href={mapUrl(related.id)} target="_blank" rel="noreferrer">
                {related.title}
              </a>
            ))}
          </div>
        </div>
      )}

      {images.length > 0 && (
        <div className={styles.gallery}>
          {images.map((image) => (
            <a key={image.id} href={image.url} target="_blank" rel="noreferrer">
              <img src={image.url} alt={image.title || location.title} loading="lazy" />
              <span><HiOutlinePhotograph /> Ampliar</span>
            </a>
          ))}
        </div>
      )}

      <footer>
        <button
          className={styles.completeButton}
          onClick={onToggle}
          aria-pressed={completed}
        >
          <span className={styles.check}>{completed && <HiCheck />}</span>
          {completed ? 'Completado' : 'Marcar completado'}
        </button>
        {location.isCatalogEntry ? (
          <span className={styles.noMap}>Sin marcador único</span>
        ) : (
          <a href={mapUrl(location.id)} target="_blank" rel="noreferrer">
            Abrir marcador <HiExternalLink />
          </a>
        )}
      </footer>
    </article>
  );
}

function CompactLocationRow({ location, completed, onToggle }) {
  const category = getCategoryById(location.categoryId);
  const region = getRegionById(location.regionId);

  return (
    <article className={`${styles.compactRow} ${completed ? styles.completedRow : ''}`}>
      <button
        className={styles.compactCheck}
        onClick={onToggle}
        aria-label={completed ? `Marcar ${location.title} como pendiente` : `Marcar ${location.title} como completado`}
        aria-pressed={completed}
      >
        {completed && <HiCheck />}
      </button>

      <div className={styles.compactIdentity}>
        <strong>{location.title}</strong>
        <span>
          {category?.group} · {category?.label}
          <i className={styles.mobileRegion}> · {region?.title ?? 'Fuentes especiales'}</i>
        </span>
      </div>

      <span className={styles.compactRegion}>
        <HiOutlineLocationMarker />
        {region?.title ?? 'Fuentes especiales'}
      </span>

      {location.isCatalogEntry ? (
        <span className={styles.noCompactMap}>—</span>
      ) : (
        <a
          className={styles.compactMap}
          href={mapUrl(location.id)}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir ${location.title} en el mapa`}
        >
          <HiExternalLink />
        </a>
      )}
    </article>
  );
}

export default function ExplorePage() {
  const {
    progress,
    isArmorObtained,
    isCharmObtained,
    isLocationCompleted,
    toggleArmor,
    toggleCharm,
    toggleLocation,
  } = useProgress();
  const [regionId, setRegionId] = useState('all');
  const [categoryId, setCategoryId] = useState('all');
  const [completionStatus, setCompletionStatus] = useState('all');
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState('cards');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const availableCategories = useMemo(() => [...ghostOfYoteiDb.categories]
    .sort((first, second) => (
      first.group.localeCompare(second.group) || first.label.localeCompare(second.label)
    )), []);

  const getLinkedEntity = (location) => location.entityType
    ? { entityType: location.entityType, appId: location.appId }
    : getCompatibilityByLocationId(location.id)[0] ?? null;

  const isCompleted = (location) => {
    const linkedEntity = getLinkedEntity(location);

    if (linkedEntity?.entityType === 'charm') {
      return isCharmObtained(linkedEntity.appId);
    }

    if (linkedEntity?.entityType === 'armor') {
      return isArmorObtained(linkedEntity.appId);
    }

    return isLocationCompleted(location.id);
  };

  const toggleExploreLocation = (location) => {
    const linkedEntity = getLinkedEntity(location);
    if (linkedEntity?.entityType === 'charm') {
      toggleCharm(linkedEntity.appId);
    } else if (linkedEntity?.entityType === 'armor') {
      toggleArmor(linkedEntity.appId);
    } else {
      toggleLocation(location.id);
    }
  };

  const scopedLocations = useMemo(() => exploreLocations
    .filter((location) => regionId === 'all'
      || location.regionId === Number(regionId)
      || location.regionId === regionId)
    .filter((location) => categoryId === 'all' || location.categoryId === Number(categoryId))
    .filter((location) => normalize([
      location.title,
      location.description,
      getCategoryById(location.categoryId)?.label,
    ].join(' ')).includes(normalize(query)))
    .sort((first, second) => (
      (getRegionById(first.regionId)?.order ?? 999) - (getRegionById(second.regionId)?.order ?? 999)
      || (second.coordinates?.lat ?? 0) - (first.coordinates?.lat ?? 0)
      || (first.coordinates?.lng ?? 0) - (second.coordinates?.lng ?? 0)
      || first.title.localeCompare(second.title)
    )), [categoryId, query, regionId]);

  const filteredLocations = useMemo(() => scopedLocations
    .filter((location) => completionStatus === 'all'
      || (completionStatus === 'completed' && isCompleted(location))
      || (completionStatus === 'pending' && !isCompleted(location))), [
    completionStatus,
    progress.completedEntries,
    scopedLocations,
  ]);

  const locationsMatchingFilters = useMemo(() => exploreLocations
    .filter((location) => categoryId === 'all' || location.categoryId === Number(categoryId))
    .filter((location) => completionStatus === 'all'
      || (completionStatus === 'completed' && isCompleted(location))
      || (completionStatus === 'pending' && !isCompleted(location)))
    .filter((location) => normalize([
      location.title,
      location.description,
      getCategoryById(location.categoryId)?.label,
    ].join(' ')).includes(normalize(query))), [
    categoryId,
    completionStatus,
    progress.completedEntries,
    query,
  ]);

  const filteredRegionCounts = useMemo(() => new Map(
    ghostOfYoteiDb.regions.map((region) => [
      region.id,
      locationsMatchingFilters.filter((location) => location.regionId === region.id).length,
    ]),
  ), [locationsMatchingFilters]);

  const completedInScope = scopedLocations
    .filter(isCompleted)
    .length;

  useEffect(() => setVisibleCount(PAGE_SIZE), [categoryId, completionStatus, query, regionId]);

  const selectedRegion = regionId === 'all'
    ? null
    : ghostOfYoteiDb.regions.find((region) => region.id === Number(regionId));

  const selectRegion = (nextRegionId) => setRegionId(nextRegionId);
  const selectedCategory = categoryId === 'all'
    ? null
    : getCategoryById(categoryId);
  const countContext = [
    selectedCategory && `${selectedCategory.group} · ${selectedCategory.label}`,
    completionStatus === 'completed' && 'Completados',
    completionStatus === 'pending' && 'Pendientes',
    query.trim() && `Búsqueda: “${query.trim()}”`,
  ].filter(Boolean);

  return (
    <section className="page">
      <header className="pageHeader">
        <span className="eyebrow">Atlas de Ezo</span>
        <h1>Explorar</h1>
        <p className="muted">
          Buscá entre {exploreLocations.length} ubicaciones, actividades y recompensas.
        </p>
      </header>

      <section className={styles.regionGrid} aria-label="Regiones">
        <button
          className={regionId === 'all' ? styles.activeRegion : ''}
          onClick={() => selectRegion('all')}
        >
          <HiOutlineLocationMarker />
          <span>Todas las regiones</span>
          <strong>{locationsMatchingFilters.length}</strong>
        </button>
        {ghostOfYoteiDb.regions.map((region) => (
          <button key={region.id} className={region.id === Number(regionId) ? styles.activeRegion : ''} onClick={() => selectRegion(region.id)}>
            <HiOutlineLocationMarker />
            <span>{region.title}</span>
            <strong>{filteredRegionCounts.get(region.id)}</strong>
          </button>
        ))}
        <button
          className={regionId === 'special' ? styles.activeRegion : ''}
          onClick={() => selectRegion('special')}
        >
          <HiOutlineLocationMarker />
          <span>Fuentes especiales</span>
          <strong>
            {locationsMatchingFilters.filter((location) => location.regionId === 'special').length}
          </strong>
        </button>
      </section>

      <p className={styles.countContext}>
        <strong>Contando:</strong>{' '}
        {countContext.length > 0 ? countContext.join(' · ') : 'Todos los contenidos'}
      </p>

      <section className={styles.explorer}>
        <header className={styles.explorerHeader}>
          <div>
            <span className="eyebrow">Región seleccionada</span>
            <h2>
              {regionId === 'special'
                ? 'Fuentes especiales'
                : selectedRegion?.title ?? 'Todas las regiones'}
            </h2>
          </div>
          <strong>
            {completedInScope}/{scopedLocations.length} completados · {filteredLocations.length} visibles
          </strong>
        </header>

        <div className={styles.filters}>
          <label>
            <span><HiOutlineSearch /> Buscar</span>
            <input className="input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nombre, descripción o categoría…" />
          </label>
          <label>
            <span>Categoría</span>
            <select className="input" value={categoryId} onChange={(event) => setCategoryId(event.target.value)}>
              <option value="all">Todas</option>
              {availableCategories.map((category) => (
                <option key={category.id} value={category.id}>{category.group} · {category.label}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Estado</span>
            <select
              className="input"
              value={completionStatus}
              onChange={(event) => setCompletionStatus(event.target.value)}
            >
              <option value="all">Todos</option>
              <option value="completed">Completados</option>
              <option value="pending">Pendientes</option>
            </select>
          </label>
        </div>

        <div className={styles.viewControls} aria-label="Modo de visualización">
          <span>Vista</span>
          <div>
            <button
              className={viewMode === 'cards' ? styles.activeView : ''}
              onClick={() => setViewMode('cards')}
              aria-pressed={viewMode === 'cards'}
            >
              <HiViewGrid /> Tarjetas
            </button>
            <button
              className={viewMode === 'compact' ? styles.activeView : ''}
              onClick={() => setViewMode('compact')}
              aria-pressed={viewMode === 'compact'}
            >
              <HiViewList /> Compacta
            </button>
          </div>
        </div>

        {filteredLocations.length === 0 ? (
          <p className="empty">No hay ubicaciones con estos filtros.</p>
        ) : viewMode === 'compact' ? (
          <div className={styles.compactList}>
            {filteredLocations.slice(0, visibleCount).map((location) => (
              <CompactLocationRow
                key={location.id}
                location={location}
                completed={isCompleted(location)}
                onToggle={() => toggleExploreLocation(location)}
              />
            ))}
          </div>
        ) : (
          <div className={styles.locationGrid}>
            {filteredLocations.slice(0, visibleCount).map((location) => (
              <LocationCard
                key={location.id}
                location={location}
                completed={isCompleted(location)}
                onToggle={() => toggleExploreLocation(location)}
              />
            ))}
          </div>
        )}

        {visibleCount < filteredLocations.length && (
          <button className={`button button--secondary ${styles.loadMore}`} onClick={() => setVisibleCount((current) => current + PAGE_SIZE)}>
            Mostrar {Math.min(PAGE_SIZE, filteredLocations.length - visibleCount)} más
          </button>
        )}
      </section>
    </section>
  );
}
