"use client";

import { useState } from "react";

const empresas = [
  {
    id: 1,
    nome: "Empresa A",
    setor: "Tecnologia",
    contato: "contato@empresaa.com",
  },
  {
    id: 2,
    nome: "Empresa B",
    setor: "Finanças",
    contato: "contato@empresab.com",
  },
  { id: 3, nome: "Empresa C", setor: "Saúde", contato: "contato@empresac.com" },
  {
    id: 4,
    nome: "Empresa D",
    setor: "Educação",
    contato: "contato@empresad.com",
  },
];

export default function Empresas() {
  const [filtro, setFiltro] = useState("");
  const [showModal, setShowModal] = useState(false);

  const empresasFiltradas = empresas.filter(
    (empresa) =>
      empresa.nome.toLowerCase().includes(filtro.toLowerCase()) ||
      empresa.setor.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-tight">Empresas</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Nova Empresa
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Lista de Empresas</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Filtrar por nome ou setor"
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
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Setor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contato
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {empresasFiltradas.map((empresa) => (
                <tr key={empresa.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {empresa.nome}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {empresa.setor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {empresa.contato}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">
                      Editar
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      Remover
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
            <h2 className="text-2xl font-bold mb-4">Cadastrar Nova Empresa</h2>
            <p>Formulário de cadastro de empresa (a ser implementado)</p>
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
