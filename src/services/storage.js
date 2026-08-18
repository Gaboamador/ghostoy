const KEY = 'ghostoy-progress-v1';
export const emptyProgress = { version: 1, obtainedCharms: [], obtainedArmors: [], favoriteBuilds: [] };
const valid = (value) => value && value.version === 1 && ['obtainedCharms','obtainedArmors','favoriteBuilds'].every((key) => Array.isArray(value[key]));
export const progressStorage = {
  load() { try { const value=JSON.parse(localStorage.getItem(KEY)); return valid(value)?value:emptyProgress; } catch { return emptyProgress; } },
  save(value) { localStorage.setItem(KEY, JSON.stringify(value)); },
  export(value) { return JSON.stringify(value, null, 2); },
  import(text) { const value=JSON.parse(text); if(!valid(value)) throw new Error('El archivo no tiene un formato de progreso válido.'); return value; },
};
