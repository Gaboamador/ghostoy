import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { progressStorage } from '../services/storage';

const Context = createContext(null);

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(progressStorage.load);

  useEffect(() => progressStorage.save(progress), [progress]);

  const toggle = (key, id) => setProgress((currentProgress) => ({
    ...currentProgress,
    [key]: currentProgress[key].includes(id)
      ? currentProgress[key].filter((itemId) => itemId !== id)
      : [...currentProgress[key], id],
  }));

  const value = useMemo(() => ({
    progress,
    setProgress,
    toggleCharm: (id) => toggle('obtainedCharms', id),
    toggleArmor: (id) => toggle('obtainedArmors', id),
    toggleFavorite: (id) => toggle('favoriteBuilds', id),
  }), [progress]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useProgress = () => useContext(Context);
