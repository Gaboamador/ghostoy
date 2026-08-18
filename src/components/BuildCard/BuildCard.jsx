import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { useBuildProgress } from '../../hooks/useBuildProgress';
import ProgressBar from '../ProgressBar';
import styles from './BuildCard.module.scss';

export default function BuildCard({ build }) {
  const progress = useBuildProgress(build);

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div>
        <span className="badge">{build.category}</span>
        <h2>{build.armor.name}</h2>
        <small className="muted">{build.armor.perkFocus}</small>
      </div>

      <div className={styles.progress}>
        <span>{progress.obtained}/{progress.total} elementos</span>
        <strong>{progress.percent}%</strong>
      </div>

      <ProgressBar value={progress.percent} />
      <p className={styles.missing}>{progress.total - progress.obtained} pendientes</p>
      <Link className={styles.link} to={`/builds/${build.id}`}>
        Ver build <HiOutlineArrowRight />
      </Link>
    </motion.article>
  );
}
