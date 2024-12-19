"use client";

import { useState } from "react";
import { Edit, Trash, ChevronLeft, ChevronRight, Plus } from "lucide-react";

// Gerar 20 empresas dinamicamente
const empresas = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  nome: `Empresa ${String.fromCharCode(65 + (i % 26))} ${i + 1}`,
  setor: ["Tecnologia", "Finanças", "Saúde", "Educação"][
    i % 4
  ], // Alternar entre setores
  contato: `contato@empresa${i + 1}.com`,
}));

export default function Empresas() {
  const [filtro, setFiltro] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showModal, setShowModal] = useState(false);

  const empresasFiltradas = empresas
    .filter(
      (empresa) =>
        empresa.nome.toLowerCase().includes(filtro.toLowerCase()) ||
        empresa.setor.toLowerCase().includes(filtro.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.nome.localeCompare(b.nome)
        : b.nome.localeCompare(a.nome)
    );

  const totalItems = empresasFiltradas.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = empresasFiltradas.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-tight">Empresas</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Lista de Empresas</h2>

        <div className="mb-4 space-y-4">
          {/* Campo de filtro */}
          <input
            type="text"
            placeholder="Filtrar por nome ou setor"
            value={filtro}
            onChange={(e) => {
              setFiltro(e.target.value);
              setCurrentPage(1); // Reinicia na primeira página ao filtrar
            }}
            className="w-full p-2 border rounded"
          />

          {/* Ordenação */}
          <div>
            <label className="mr-2 font-medium">Ordenar:</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
              className="p-2 border rounded"
            >
              <option value="asc">Alfabética (A-Z)</option>
              <option value="desc">Alfabética (Z-A)</option>
            </select>
          </div>

          {/* Seleção de itens por página */}
          <div>
            <label className="mr-2 font-medium">Itens por página:</label>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1); // Reinicia na primeira página ao alterar
              }}
              className="p-2 border rounded"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
        </div>

        {/* Lista de empresas */}
        <ul className="space-y-4">
          {currentItems.map((empresa) => (
            <li
              key={empresa.id}
              className="flex justify-between items-center p-4 bg-gray-100 rounded shadow"
            >
              <div>
                <p className="font-medium text-lg">{empresa.nome}</p>
                <p className="text-sm text-gray-600">{empresa.setor}</p>
                <p className="text-sm text-gray-600">{empresa.contato}</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Paginação */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-300 text-gray-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            } flex items-center`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            } flex items-center`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
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
