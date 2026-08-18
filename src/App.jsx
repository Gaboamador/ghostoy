import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import BuildsPage from './pages/BuildsPage';
import BuildDetailPage from './pages/BuildDetailPage';
import CollectionPage from './pages/CollectionPage';
import MissingPage from './pages/MissingPage';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/builds" replace />} />
        <Route path="/builds" element={<BuildsPage />} />
        <Route path="/builds/:buildId" element={<BuildDetailPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/missing" element={<MissingPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/builds" replace />} />
      </Routes>
    </Layout>
  );
}
