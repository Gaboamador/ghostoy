import { HiArrowLeft } from 'react-icons/hi';
import { Link, useParams } from 'react-router-dom';

import ItemRow from '../../components/ItemRow';
import ProgressBar from '../../components/ProgressBar';
import { useProgress } from '../../context/ProgressContext';
import { buildById } from '../../data/builds';
import { useBuildProgress } from '../../hooks/useBuildProgress';
import styles from './BuildDetailPage.module.scss';

function BuildDetail({ build }) {
  const { progress, toggleCharm, toggleArmor } = useProgress();
  const buildProgress = useBuildProgress(build);
  const { armor } = build;

  return (
    <section className="page">
      <Link to="/builds" className={styles.backLink}>
        <HiArrowLeft /> Volver
      </Link>

      <header className="pageHeader">
        <span className="eyebrow">{build.category}</span>
        <h1>{armor.name}</h1>
        <p className="muted">{armor.perkFocus}</p>
        <p>
          {buildProgress.obtained}/{buildProgress.total} elementos · {buildProgress.percent}%
        </p>
        <ProgressBar value={buildProgress.percent} />
      </header>

      <div className="stack">
        <ItemRow
          item={armor}
          checked={progress.obtainedArmors.includes(armor.id)}
          onToggle={() => toggleArmor(armor.id)}
          subtitle="Armadura"
        />

        {build.charms.map((charm) => (
          <ItemRow
            key={charm.id}
            item={charm}
            checked={progress.obtainedCharms.includes(charm.id)}
            onToggle={() => toggleCharm(charm.id)}
            subtitle={`${charm.slot} · ${charm.type}`}
          />
        ))}
      </div>

      {build.alternativeCharms.length > 0 && (
        <aside className={styles.alternative}>
          <strong>Alternativa de slot</strong>
          <p>{build.alternativeCharms.map((charm) => charm.name).join(', ')}</p>
        </aside>
      )}
    </section>
  );
}

export default function BuildDetailPage() {
  const { buildId } = useParams();
  const build = buildById[buildId];

  if (!build) {
    return (
      <section className="page">
        <p className="empty">Build no encontrado.</p>
      </section>
    );
  }

  return <BuildDetail build={build} />;
}
