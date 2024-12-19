"use client";

import { useState } from "react";

const contratos = [
  {
    id: 1,
    empresa: "Empresa A",
    valor: "R$ 50.000",
    status: "Ativo",
    dataInicio: "2023-01-01",
    dataFim: "2024-01-01",
  },
  {
    id: 2,
    empresa: "Empresa B",
    valor: "R$ 75.000",
    status: "Ativo",
    dataInicio: "2023-02-15",
    dataFim: "2024-02-15",
  },
  {
    id: 3,
    empresa: "Empresa C",
    valor: "R$ 100.000",
    status: "Pendente",
    dataInicio: "2023-03-01",
    dataFim: "2024-03-01",
  },
  {
    id: 4,
    empresa: "Empresa D",
    valor: "R$ 25.000",
    status: "Cancelado",
    dataInicio: "2023-04-01",
    dataFim: "2023-10-01",
  },
];

export default function Contratos() {
  const [filtro, setFiltro] = useState("");
  const [showModal, setShowModal] = useState(false);

  const contratosFiltrados = contratos.filter(
    (contrato) =>
      contrato.empresa.toLowerCase().includes(filtro.toLowerCase()) ||
      contrato.status.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-tight">Contratos</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Novo Contrato
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Lista de Contratos</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Filtrar por empresa ou status"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="overflow-x-auto">
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data de Início
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data de Fim
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contratosFiltrados.map((contrato) => (
                <tr key={contrato.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {contrato.empresa}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {contrato.valor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {contrato.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {contrato.dataInicio}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {contrato.dataFim}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">
                      Editar
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      Cancelar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Criar Novo Contrato</h2>
            <p>Formulário de criação de contrato (a ser implementado)</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
