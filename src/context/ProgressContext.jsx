import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { progressStorage } from '../services/storage';
import { entryId, hasEntry } from '../services/progressEntries';

const Context = createContext(null);

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(progressStorage.load);

  useEffect(() => progressStorage.save(progress), [progress]);

  useEffect(() => {
    let active = true;

    import('../data/ghostOfYoteiSelectors').then(({ reconcileProgressEntries }) => {
      if (active) setProgress((currentProgress) => reconcileProgressEntries(currentProgress));
    });

    return () => {
      active = false;
    };
  }, []);

  const toggle = (key, id) => setProgress((currentProgress) => ({
    ...currentProgress,
    [key]: currentProgress[key].includes(id)
      ? currentProgress[key].filter((itemId) => itemId !== id)
      : [...currentProgress[key], id],
  }));

  const toggleCompletedEntry = (type, id) => setProgress((currentProgress) => {
    const target = entryId[type](id);

    return {
      ...currentProgress,
      completedEntries: currentProgress.completedEntries.includes(target)
        ? currentProgress.completedEntries.filter((entry) => entry !== target)
        : [...currentProgress.completedEntries, target],
    };
  });

  const value = useMemo(() => ({
    progress,
    setProgress,
    isCharmObtained: (id) => hasEntry(progress, 'charm', id),
    isArmorObtained: (id) => hasEntry(progress, 'armor', id),
    isLocationCompleted: (id) => hasEntry(progress, 'location', id),
    toggleCharm: (id) => toggleCompletedEntry('charm', id),
    toggleArmor: (id) => toggleCompletedEntry('armor', id),
    toggleFavorite: (id) => toggle('favoriteBuilds', id),
    toggleLocation: (id) => toggleCompletedEntry('location', id),
  }), [progress]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useProgress = () => useContext(Context);
