export const entryId = {
  charm: (id) => `charm:${id}`,
  armor: (id) => `armor:${id}`,
  location: (id) => `location:${id}`,
};

export const hasEntry = (progress, type, id) => (
  progress.completedEntries.includes(entryId[type](id))
);

export const getCompletedIds = (progress, type) => {
  const prefix = `${type}:`;

  return progress.completedEntries
    .filter((entry) => entry.startsWith(prefix))
    .map((entry) => entry.slice(prefix.length));
};

export const reconcileEntries = (progress, entitiesByType) => {
  const completedEntries = new Set(progress.completedEntries);

  Object.entries(entitiesByType).forEach(([entityType, entities]) => {
    entities.forEach((entity) => {
      const entityEntry = entryId[entityType](entity.id);
      const hasCompletedMarker = entity.mapgenieLocationIds
        .some((locationId) => completedEntries.has(entryId.location(locationId)));

      if (completedEntries.has(entityEntry) || hasCompletedMarker) {
        completedEntries.add(entityEntry);
        entity.mapgenieLocationIds
          .forEach((locationId) => completedEntries.delete(entryId.location(locationId)));
      }
    });
  });

  const reconciled = {
    version: 3,
    completedEntries: [...completedEntries],
    favoriteBuilds: progress.favoriteBuilds,
  };

  return JSON.stringify(reconciled) === JSON.stringify(progress) ? progress : reconciled;
};
