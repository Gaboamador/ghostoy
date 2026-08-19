import {
  armors,
  charms,
  ghostOfYoteiDb,
} from './ghostOfYoteiSelectors';

const categoryByKey = new Map(
  ghostOfYoteiDb.categories.map((category) => [category.key, category]),
);

const compatibilityByType = {
  armor: new Map(armors.map((entry) => [entry.id, entry])),
  charm: new Map(charms.map((entry) => [entry.id, entry])),
};

const createCatalogLocation = (entityType, item) => {
  const category = categoryByKey.get(entityType);
  const details = entityType === 'charm'
    ? item.effect
    : [item.perkFocus, ...(item.effects ?? [])].filter(Boolean).join('\n');

  return {
    id: `catalog:${entityType}:${item.id}`,
    regionId: 'special',
    categoryId: category.id,
    categoryKey: category.key,
    title: item.name,
    description: [item.howToGet, details].filter(Boolean).join('\n\n'),
    coordinates: null,
    relatedLocationIds: [],
    media: [],
    entityType,
    appId: item.id,
    isCatalogEntry: true,
  };
};

const missingCharms = charms
  .filter((item) => !compatibilityByType.charm.get(item.id)?.mapgenieLocationIds.length)
  .map((item) => createCatalogLocation('charm', item));

const missingArmors = armors
  .filter((item) => !compatibilityByType.armor.get(item.id)?.mapgenieLocationIds.length)
  .map((item) => createCatalogLocation('armor', item));

export const exploreLocations = [
  ...ghostOfYoteiDb.locations,
  ...missingCharms,
  ...missingArmors,
];

export const specialSourceCount = missingCharms.length + missingArmors.length;
