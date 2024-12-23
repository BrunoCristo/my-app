"use client";

const data = [
  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
];

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Negociações Ativas"
          value="24"
          change="+2 desde o último mês"
        />
        <DashboardCard
          title="Contratos Assinados"
          value="12"
          change="+3 desde o último mês"
        />
        <DashboardCard
          title="Empresas Cadastradas"
          value="78"
          change="+5 desde o último mês"
        />
        <DashboardCard
          title="Receita Total"
          value="R$ 45.231"
          change="+20% desde o último mês"
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Visão Geral de Vendas</h2>
        {/* <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" />
            <YAxis stroke="#888888" />
            <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer> */}
      </div>
    </div>
  );
}

function DashboardCard({ title, value, change }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-gray-500">{change}</p>
    </div>
  );
}
