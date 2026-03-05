import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardPage from './pages/DashboardPage'
import ProductsPage from './pages/ProductsPage'
import LeadsPage from './pages/LeadsPage'
import CampaignsPage from './pages/CampaignsPage'

function App() {
  return (
    <Layout>
      <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
