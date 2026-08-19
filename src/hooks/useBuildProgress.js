import { useProgress } from '../context/ProgressContext';

export function useBuildProgress(build) {
  const { isArmorObtained, isCharmObtained } = useProgress();
  const charms = build.charmIds
    .filter(isCharmObtained)
    .length;
  const armor = isArmorObtained(build.armorId) ? 1 : 0;

  return {
    obtained: charms + armor,
    total: build.charmIds.length + 1,
    percent: Math.round(((charms + armor) / (build.charmIds.length + 1)) * 100),
  };
}
