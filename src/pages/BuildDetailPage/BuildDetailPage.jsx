import { useState } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { Link, useParams } from 'react-router-dom';

import ItemRow from '../../components/ItemRow';
import ProgressBar from '../../components/ProgressBar';
import { useProgress } from '../../context/ProgressContext';
import { buildById } from '../../data/builds';
import { useBuildProgress } from '../../hooks/useBuildProgress';
import { guideLanguageStorage } from '../../services/storage';
import styles from './BuildDetailPage.module.scss';

function BuildDetail({ build }) {
  const {
    isArmorObtained,
    isCharmObtained,
    toggleCharm,
    toggleArmor,
  } = useProgress();
  const buildProgress = useBuildProgress(build);
  const { armor, guide } = build;
  const [guideLanguage, setGuideLanguage] = useState(guideLanguageStorage.load);
  const guideContent = guide.translations[guideLanguage];

  const changeGuideLanguage = (language) => {
    setGuideLanguage(language);
    guideLanguageStorage.save(language);
  };

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

      <section className={styles.guide}>
        <div className={styles.guideHeader}>
          <div>
            <span className="eyebrow">Build analysis</span>
            <h2>How this build works</h2>
          </div>
          <div className={styles.guideControls}>
            <div className={styles.languageSwitch} aria-label="Guide language">
              <button
                className={guideLanguage === 'en' ? styles.activeLanguage : ''}
                onClick={() => changeGuideLanguage('en')}
                aria-pressed={guideLanguage === 'en'}
              >
                EN
              </button>
              <button
                className={guideLanguage === 'es' ? styles.activeLanguage : ''}
                onClick={() => changeGuideLanguage('es')}
                aria-pressed={guideLanguage === 'es'}
              >
                ES
              </button>
            </div>
            <div className={styles.rating} aria-label={`${guide.rating} out of 5 stars`}>
              <strong>{guide.rating}</strong>
              <span>/ 5 ★</span>
            </div>
          </div>
        </div>

        <div lang={guideLanguage} className={styles.guideContent}>
          <p className={styles.overview}>{guideContent.overview}</p>

          <div className={styles.playstyle}>
            <strong>Recommended playstyle</strong>
            <p>{guideContent.playstyle}</p>
          </div>

          <div className={styles.guideGrid}>
            <div>
              <h3>Key synergies</h3>
              <ul>
                {guideContent.synergies.map((synergy) => <li key={synergy}>{synergy}</li>)}
              </ul>
            </div>
            <div>
              <h3>Strengths</h3>
              <ul>
                {guideContent.strengths.map((strength) => <li key={strength}>{strength}</li>)}
              </ul>
            </div>
            <div>
              <h3>Weaknesses</h3>
              <ul>
                {guideContent.weaknesses.map((weakness) => <li key={weakness}>{weakness}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <h2 className={styles.loadoutTitle}>Loadout</h2>

      <div className="stack">
        <ItemRow
          item={armor}
          checked={isArmorObtained(armor.id)}
          onToggle={() => toggleArmor(armor.id)}
          subtitle="Armadura"
        />

        {build.charms.map((charm) => (
          <ItemRow
            key={charm.id}
            item={charm}
            checked={isCharmObtained(charm.id)}
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
