import StatsCard from '../components/StatsCard'
import FormComponent from '../components/FormComponent'
import DataTable from '../components/DataTable'

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Lead Management</h1>
        <p className="text-slate-400">Track and manage customer leads and conversion pipeline</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Lead Management</h1>
          <p className="text-slate-400">Convert prospects into customers with effective lead tracking</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[{"id":"active_leads","label":"Active Leads","icon":"user-plus","value":"loading","color":"primary"},{"id":"monthly_leads","label":"This Month's Leads","icon":"calendar-alt","value":"loading","color":"success"},{"id":"conversion_rate","label":"Lead Conversion Rate","icon":"chart-line","value":"loading","color":"info"}]} />

      <FormComponent key="2" title="Add New Lead" fields={[{"name":"fullName","label":"Full Name","type":"text","required":true},{"name":"email","label":"Email Address","type":"email","required":true},{"name":"phone","label":"Phone Number","type":"tel","required":false},{"name":"interestedProduct","label":"Interested Product","type":"text","required":true},{"name":"leadSource","label":"Lead Source","type":"select","required":true,"options":["Landing Page","Social Media","Email Campaign","Referral","Direct Visit"]},{"name":"inquiryDate","label":"Inquiry Date","type":"date","required":true},{"name":"status","label":"Lead Status","type":"select","required":true,"options":["New","Contacted","Qualified","Converted","Lost"]}]} />

      <DataTable key="3" columns={["fullName","email","interestedProduct","leadSource","status","inquiryDate"]} rows={[]} />
    </div>
  )
}
