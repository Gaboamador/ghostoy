import ghostOfYoteiDb from './ghostOfYoteiDb.json';
import { reconcileEntries } from '../services/progressEntries';

export const charms = ghostOfYoteiDb.entities.charms;
export const armors = ghostOfYoteiDb.entities.armors;
export const charmById = Object.fromEntries(charms.map((item) => [item.id, item]));
export const armorById = Object.fromEntries(armors.map((item) => [item.id, item]));

const regionById = new Map(
  ghostOfYoteiDb.regions.map((region) => [region.id, region]),
);

const categoryById = new Map(
  ghostOfYoteiDb.categories.map((category) => [category.id, category]),
);

const categoryByKey = new Map(
  ghostOfYoteiDb.categories.map((category) => [category.key, category]),
);

const locationById = new Map(
  ghostOfYoteiDb.locations.map((location) => [location.id, location]),
);

const compatibilityByType = {
  armor: new Map(
    armors.map((entry) => [entry.id, entry]),
  ),
  charm: new Map(
    charms.map((entry) => [entry.id, entry]),
  ),
};

const compatibilityByLocationId = new Map();

Object.entries(compatibilityByType).forEach(([entityType, entries]) => {
  entries.forEach((entry) => {
    entry.mapgenieLocationIds.forEach((locationId) => {
      compatibilityByLocationId.set(locationId, [
        ...(compatibilityByLocationId.get(locationId) ?? []),
        { entityType, appId: entry.id },
      ]);
    });
  });
});

export const getRegionById = (regionId) => regionById.get(Number(regionId)) ?? null;

export const getCategoryById = (categoryId) => (
  categoryById.get(Number(categoryId)) ?? null
);

export const getCategoryByKey = (categoryKey) => (
  categoryByKey.get(categoryKey) ?? null
);

export const getLocationById = (locationId) => (
  locationById.get(Number(locationId)) ?? null
);

export const getLocationsByIds = (locationIds = []) => locationIds
  .map(getLocationById)
  .filter(Boolean);

export const getLocationsByRegionId = (regionId) => ghostOfYoteiDb.locations
  .filter((location) => location.regionId === Number(regionId));

export const getLocationsByCategory = (category) => {
  const categoryId = typeof category === 'number'
    ? category
    : getCategoryByKey(category)?.id;

  if (!categoryId) return [];

  return ghostOfYoteiDb.locations
    .filter((location) => location.categoryId === categoryId);
};

export const searchLocationsByTitle = (query) => {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  if (!normalizedQuery) return [];

  return ghostOfYoteiDb.locations.filter((location) => (
    location.title.toLocaleLowerCase().includes(normalizedQuery)
  ));
};

export const getCompatibilityEntry = (entityType, appId) => (
  compatibilityByType[entityType]?.get(appId) ?? null
);

export const getCompatibilityByLocationId = (locationId) => (
  compatibilityByLocationId.get(Number(locationId)) ?? []
);

export const getEntityMapData = (entityType, appId) => {
  const compatibility = getCompatibilityEntry(entityType, appId);
  const locations = getLocationsByIds(compatibility?.mapgenieLocationIds);
  const relatedLocations = getLocationsByIds([
    ...new Set(locations.flatMap((location) => location.relatedLocationIds)),
  ]);
  const regions = [...new Map(
    locations
      .map((location) => getRegionById(location.regionId))
      .filter(Boolean)
      .map((region) => [region.id, region]),
  ).values()];

  return {
    compatibility,
    locations,
    relatedLocations,
    regions,
  };
};

export const reconcileProgressEntries = (progress) => {
  return reconcileEntries(progress, { charm: charms, armor: armors });
};

export { ghostOfYoteiDb };
