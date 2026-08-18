import BuildCard from '../../components/BuildCard';
import { builds } from '../../data/builds';
import styles from './BuildsPage.module.scss';

export default function BuildsPage() {
  return (
    <section className="page">
      <header className="pageHeader">
        <span className="eyebrow">{builds.length} configuraciones</span>
        <h1>Builds</h1>
        <p className="muted">
          Elegí una estrategia y revisá qué te falta para completarla.
        </p>
      </header>

      <div className={styles.buildGrid}>
        {builds.map((build) => (
          <BuildCard key={build.id} build={build} />
        ))}
      </div>
    </section>
  );
}
