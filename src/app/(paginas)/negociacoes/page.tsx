"use client";

import { useState } from "react";
import { LayoutList, KanbanIcon as LayoutKanban } from "lucide-react";

const negociacoes = [
  { id: 1, empresa: "Empresa A", valor: "R$ 50.000", status: "Em andamento" },
  {
    id: 2,
    empresa: "Empresa B",
    valor: "R$ 75.000",
    status: "Proposta enviada",
  },
  {
    id: 3,
    empresa: "Empresa C",
    valor: "R$ 100.000",
    status: "Negociação inicial",
  },
  {
    id: 4,
    empresa: "Empresa D",
    valor: "R$ 25.000",
    status: "Contrato pendente",
  },
];

const kanbanColumns = [
  "Negociação inicial",
  "Proposta enviada",
  "Em andamento",
  "Contrato pendente",
];

export default function Negociacoes() {
  const [viewMode, setViewMode] = useState<"list" | "kanban">("kanban");

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-tight">Negociações</h1>
        <div className="space-x-2">
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded ${
              viewMode === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            <LayoutList className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewMode("kanban")}
            className={`p-2 rounded ${
              viewMode === "kanban" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            <LayoutKanban className="h-5 w-5" />
          </button>
        </div>
      </div>

      {viewMode === "list" ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Empresa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {negociacoes.map((negociacao) => (
                <tr key={negociacao.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {negociacao.empresa}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {negociacao.valor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {negociacao.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kanbanColumns.map((column) => (
            <div key={column} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-4">{column}</h3>
              {negociacoes
                .filter((negociacao) => negociacao.status === column)
                .map((negociacao) => (
                  <div
                    key={negociacao.id}
                    className="bg-white p-3 rounded-md mb-2 shadow"
                  >
                    <p className="font-medium">{negociacao.empresa}</p>
                    <p className="text-sm text-gray-600">{negociacao.valor}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
