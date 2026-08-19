import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import BuildsPage from './pages/BuildsPage';
import SettingsPage from './pages/SettingsPage';

const MissingPage = lazy(() => import('./pages/MissingPage'));
const CollectionPage = lazy(() => import('./pages/CollectionPage'));
const ExplorePage = lazy(() => import('./pages/ExplorePage'));
const BuildDetailPage = lazy(() => import('./pages/BuildDetailPage'));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/builds" replace />} />
        <Route path="/builds" element={<BuildsPage />} />
        <Route
          path="/builds/:buildId"
          element={(
            <Suspense fallback={<p className="empty">Cargando build…</p>}>
              <BuildDetailPage />
            </Suspense>
          )}
        />
        <Route
          path="/collection"
          element={(
            <Suspense fallback={<p className="empty">Cargando colección…</p>}>
              <CollectionPage />
            </Suspense>
          )}
        />
        <Route
          path="/explore"
          element={(
            <Suspense fallback={<p className="empty">Cargando atlas…</p>}>
              <ExplorePage />
            </Suspense>
          )}
        />
        <Route
          path="/missing"
          element={(
            <Suspense fallback={<p className="empty">Cargando planificador…</p>}>
              <MissingPage />
            </Suspense>
          )}
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/builds" replace />} />
      </Routes>
    </Layout>
  );
}
