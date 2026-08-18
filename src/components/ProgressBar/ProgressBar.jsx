import styles from './ProgressBar.module.scss';

export default function ProgressBar({ value }) {
  return (
    <div className={styles.track} aria-label={`${value}% completo`}>
      <span style={{ width: `${value}%` }} />
    </div>
  );
}
