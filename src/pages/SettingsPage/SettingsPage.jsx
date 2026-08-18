import { useRef, useState } from 'react';

import { useProgress } from '../../context/ProgressContext';
import { progressStorage } from '../../services/storage';
import styles from './SettingsPage.module.scss';

export default function SettingsPage() {
  const { progress, setProgress } = useProgress();
  const inputRef = useRef();
  const [message, setMessage] = useState('');

  const downloadProgress = () => {
    const blob = new Blob(
      [progressStorage.export(progress)],
      { type: 'application/json' },
    );
    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = 'ghostoy-progreso.json';
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const uploadProgress = async (event) => {
    const [file] = event.target.files;

    if (!file) return;

    try {
      const importedProgress = progressStorage.import(await file.text());
      setProgress(importedProgress);
      setMessage('Progreso importado correctamente.');
    } catch (error) {
      setMessage(error.message);
    }

    event.target.value = '';
  };

  return (
    <section className="page">
      <header className="pageHeader">
        <span className="eyebrow">Respaldo local</span>
        <h1>Importar y exportar</h1>
        <p className="muted">Tu progreso se guarda solamente en este dispositivo.</p>
      </header>

      <div className={styles.actions}>
        <button className="button" onClick={downloadProgress}>
          Exportar progreso JSON
        </button>
        <button
          className="button button--secondary"
          onClick={() => inputRef.current.click()}
        >
          Importar progreso JSON
        </button>
        <input
          ref={inputRef}
          hidden
          type="file"
          accept="application/json"
          onChange={uploadProgress}
        />
        {message && <p className="empty">{message}</p>}
      </div>
    </section>
  );
}
