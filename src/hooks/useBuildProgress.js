import { useProgress } from '../context/ProgressContext';

export function useBuildProgress(build) {
  const { progress } = useProgress();
  const charms = build.charmIds
    .filter((id) => progress.obtainedCharms.includes(id))
    .length;
  const armor = progress.obtainedArmors.includes(build.armorId) ? 1 : 0;

  return {
    obtained: charms + armor,
    total: build.charmIds.length + 1,
    percent: Math.round(((charms + armor) / (build.charmIds.length + 1)) * 100),
  };
}
