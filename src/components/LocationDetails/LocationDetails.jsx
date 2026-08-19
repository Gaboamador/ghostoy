import {
  HiExternalLink,
  HiOutlineLocationMarker,
  HiOutlinePhotograph,
} from 'react-icons/hi';

import {
  getCategoryById,
  getEntityMapData,
} from '../../data/ghostOfYoteiSelectors';
import styles from './LocationDetails.module.scss';

const cleanDescription = (description = '') => description
  .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
  .replace(/[*_#>`]/g, '')
  .replace(/\n-{1,}\s*/g, '\n')
  .trim();

const mapUrl = (locationId) => (
  `https://mapgenie.io/ghost-of-yotei/maps/yotei?locationIds=${locationId}`
);

export default function LocationDetails({ entityType, appId, compact = false }) {
  const mapData = getEntityMapData(entityType, appId);
  const hasMarker = mapData.locations.length > 0;
  const references = [...mapData.relatedLocations, ...mapData.locations]
    .filter((location, index, locations) => (
      locations.findIndex((candidate) => candidate.id === location.id) === index
    ));
  const descriptions = references
    .map((location) => cleanDescription(location.description))
    .filter(Boolean);
  const media = references
    .flatMap((location) => location.media)
    .filter((item, index, items) => items.findIndex((candidate) => candidate.id === item.id) === index)
    .slice(0, 3);

  return (
    <details className={`${styles.details} ${compact ? styles.compact : ''}`}>
      <summary>
        <span>
          <HiOutlineLocationMarker />
          Ver ubicación
        </span>
        <span className={`${styles.quality} ${hasMarker ? styles.confirmed : styles.fallback}`}>
          {hasMarker ? 'Marcador vinculado' : 'Información de respaldo'}
        </span>
      </summary>

      <div className={styles.content}>
        {hasMarker ? (
          <>
            <div className={styles.facts}>
              {mapData.regions.map((region) => (
                <span key={region.id}><strong>Región:</strong> {region.title}</span>
              ))}
              {mapData.locations.map((location) => {
                const category = getCategoryById(location.categoryId);
                return category && (
                  <span key={location.id}><strong>Categoría:</strong> {category.label}</span>
                );
              })}
            </div>

            {references.length > 0 && (
              <div className={styles.references}>
                {references.map((location) => (
                  <a
                    key={location.id}
                    href={mapUrl(location.id)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{location.title}</span>
                    <HiExternalLink />
                  </a>
                ))}
              </div>
            )}

            {descriptions.map((description, index) => (
              <p key={`${index}:${description}`} className={styles.description}>{description}</p>
            ))}

            {media.length > 0 && (
              <div className={styles.gallery}>
                {media.map((item) => (
                  <a key={item.id} href={item.url} target="_blank" rel="noreferrer">
                    <img src={item.url} alt={item.title || 'Referencia de ubicación'} loading="lazy" />
                    <span><HiOutlinePhotograph /> Ver imagen</span>
                  </a>
                ))}
              </div>
            )}
          </>
        ) : (
          <p className={styles.description}>
            La base reconoce este elemento, pero todavía no contiene un marcador relacionado.
            Se mantiene la información de obtención de la guía actual.
          </p>
        )}
      </div>
    </details>
  );
}
