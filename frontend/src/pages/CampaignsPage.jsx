import StatsCard from '../components/StatsCard'
import FormComponent from '../components/FormComponent'
import DataTable from '../components/DataTable'

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Campaign Management</h1>
        <p className="text-slate-400">Plan, execute, and track marketing campaigns for your bifruit products</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Campaign Management</h1>
          <p className="text-slate-400">Create and monitor effective marketing campaigns</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[{"id":"total_campaign_budget","label":"Total Campaign Budget","icon":"dollar-sign","value":"loading","color":"primary"}]} />

      <FormComponent key="2" title="Create New Campaign" fields={[{"name":"campaignName","label":"Campaign Name","type":"text","required":true},{"name":"targetProduct","label":"Target Product","type":"text","required":true},{"name":"budget","label":"Campaign Budget","type":"currency","required":true},{"name":"startDate","label":"Start Date","type":"date","required":true},{"name":"endDate","label":"End Date","type":"date","required":true},{"name":"platform","label":"Marketing Platform","type":"select","required":true,"options":["Facebook Ads","Google Ads","Instagram","Email Marketing","Content Marketing"]},{"name":"status","label":"Campaign Status","type":"select","required":true,"options":["Planning","Active","Paused","Completed","Cancelled"]}]} />

      <DataTable key="3" columns={["campaignName","targetProduct","platform","budget","startDate","endDate","status"]} rows={[]} />
    </div>
  )
}
