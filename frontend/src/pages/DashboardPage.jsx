import StatsCard from '../components/StatsCard'
import ChartComponent from '../components/ChartComponent'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Marketing Dashboard</h1>
        <p className="text-slate-400">Overview of marketing performance, product metrics, and lead analytics</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Marketing Dashboard</h1>
          <p className="text-slate-400">Track your bifruit product marketing performance</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[{"id":"total_products","label":"Total Products","icon":"glass-whiskey","value":"loading","color":"primary"},{"id":"active_leads","label":"Active Leads","icon":"user-plus","value":"loading","color":"success"},{"id":"total_campaign_budget","label":"Total Campaign Budget","icon":"dollar-sign","value":"loading","color":"warning"},{"id":"conversion_rate","label":"Lead Conversion Rate","icon":"chart-line","value":"loading","color":"info"},{"id":"monthly_leads","label":"This Month's Leads","icon":"calendar-alt","value":"loading","color":"secondary"},{"id":"inventory_value","label":"Total Inventory Value","icon":"warehouse","value":"loading","color":"primary"}]} />

      <ChartComponent key="2" type="bar" title="Performance Analytics" data={{"leads_trend":[],"campaign_performance":[],"product_categories":[]}} />
    </div>
  )
}
