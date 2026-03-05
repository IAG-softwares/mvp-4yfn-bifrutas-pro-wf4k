import StatsCard from '../components/StatsCard'
import FormComponent from '../components/FormComponent'
import DataTable from '../components/DataTable'

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <p className="text-slate-400">Manage your bifruit product catalog with pricing and inventory tracking</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Product Management</h1>
          <p className="text-slate-400">Showcase and manage your bifruit product line</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[{"id":"total_products","label":"Total Products","icon":"glass-whiskey","value":"loading","color":"primary"},{"id":"inventory_value","label":"Total Inventory Value","icon":"warehouse","value":"loading","color":"success"}]} />

      <FormComponent key="2" title="Add New Product" fields={[{"name":"productName","label":"Product Name","type":"text","required":true},{"name":"description","label":"Product Description","type":"textarea","required":true},{"name":"price","label":"Price","type":"currency","required":true},{"name":"category","label":"Category","type":"select","required":true,"options":["Fruit Juice","Smoothie","Energy Drink","Natural Blend","Organic Mix"]},{"name":"ingredients","label":"Main Ingredients","type":"text","required":true},{"name":"stockQuantity","label":"Stock Quantity","type":"number","required":true},{"name":"launchDate","label":"Launch Date","type":"date","required":false}]} />

      <DataTable key="3" columns={["productName","category","price","stockQuantity","ingredients"]} rows={[]} />
    </div>
  )
}
