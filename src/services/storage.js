const KEY = 'ghostoy-progress-v1';
const GUIDE_LANGUAGE_KEY = 'ghostoy-guide-language';

export const emptyProgress = {
  version: 3,
  completedEntries: [],
  favoriteBuilds: [],
};

const legacyKeys = ['obtainedCharms', 'obtainedArmors', 'favoriteBuilds'];

const isLegacyProgress = (value) => value
  && value.version === 1
  && legacyKeys.every((key) => Array.isArray(value[key]));

const isVersionTwoProgress = (value) => value
  && value.version === 2
  && [...legacyKeys, 'completedLocations'].every((key) => Array.isArray(value[key]));

const isCurrentProgress = (value) => value
  && value.version === 3
  && Array.isArray(value.completedEntries)
  && Array.isArray(value.favoriteBuilds);

const migrateVersionTwo = (value) => ({
  version: 3,
  completedEntries: [...new Set([
    ...value.obtainedCharms.map((id) => `charm:${id}`),
    ...value.obtainedArmors.map((id) => `armor:${id}`),
    ...value.completedLocations.map((id) => `location:${id}`),
  ])],
  favoriteBuilds: value.favoriteBuilds,
});

const migrate = (value) => {
  if (isCurrentProgress(value)) {
    return {
      version: 3,
      completedEntries: [...new Set(value.completedEntries)],
      favoriteBuilds: [...new Set(value.favoriteBuilds)],
    };
  }

  if (isVersionTwoProgress(value)) return migrateVersionTwo(value);

  if (isLegacyProgress(value)) {
    return migrateVersionTwo({ ...value, version: 2, completedLocations: [] });
  }

  return null;
};

export const progressStorage = {
  load() {
    try {
      const value = JSON.parse(localStorage.getItem(KEY));
      return migrate(value) ?? emptyProgress;
    } catch {
      return emptyProgress;
    }
  },

  save(value) {
    localStorage.setItem(KEY, JSON.stringify(migrate(value) ?? emptyProgress));
  },

  export(value) {
    return JSON.stringify(migrate(value) ?? emptyProgress, null, 2);
  },

  import(text) {
    const value = JSON.parse(text);

    const migratedProgress = migrate(value);

    if (!migratedProgress) {
      throw new Error('El archivo no tiene un formato de progreso válido.');
    }

    return migratedProgress;
  },
};

export const guideLanguageStorage = {
  load() {
    const language = localStorage.getItem(GUIDE_LANGUAGE_KEY);
    return language === 'es' ? 'es' : 'en';
  },

  save(language) {
    localStorage.setItem(GUIDE_LANGUAGE_KEY, language === 'es' ? 'es' : 'en');
  },
};
