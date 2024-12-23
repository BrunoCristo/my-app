"use client";

import { useState } from "react";
import { Edit, Trash, ChevronLeft, ChevronRight } from "lucide-react";
import FormularioServico from "../../../components/Servicos/FormularioServico";

const servicos = [
  { id: 1, nome: "Serviço 1", descricao: "Descrição do Serviço 1" },
  { id: 2, nome: "Serviço 2", descricao: "Descrição do Serviço 2" },
];

const pacotes = [
  { id: 1, nome: "Pacote 1", descricao: "Descrição do Pacote 1" },
  { id: 2, nome: "Pacote 2", descricao: "Descrição do Pacote 2" },
];

export default function Cadastros() {
  const [filtro, setFiltro] = useState("");
  const [activeTab, setActiveTab] = useState("servico");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showModal, setShowModal] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState<any>(null);

  const listaFiltrada = (lista: any[]) =>
    lista
      .filter(
        (item) =>
          item.nome.toLowerCase().includes(filtro.toLowerCase()) ||
          item.descricao.toLowerCase().includes(filtro.toLowerCase())
      )
      .sort((a, b) =>
        sortOrder === "asc"
          ? a.nome.localeCompare(b.nome)
          : b.nome.localeCompare(a.nome)
      );

  const totalItems = listaFiltrada(activeTab === "servico" ? servicos : pacotes).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = listaFiltrada(activeTab === "servico" ? servicos : pacotes).slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Função para abrir o modal de criação ou edição
  const handleOpenModal = (servico: any) => {
    setServicoSelecionado(servico); // Passa os dados do serviço para o modal
    setShowModal(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setServicoSelecionado(null); // Limpa a seleção ao fechar o modal
    setShowModal(false);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-tight">Cadastros</h1>
        <button
          onClick={() => handleOpenModal(null)} // Passa null para abrir o formulário vazio
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Criar Novo Serviço
        </button>
      </div>

      <div className="flex mb-4 space-x-4">
        <button
          onClick={() => setActiveTab("servico")}
          className={`px-4 py-2 rounded-lg ${activeTab === "servico" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
        >
          Serviços
        </button>
        <button
          onClick={() => setActiveTab("pacote")}
          className={`px-4 py-2 rounded-lg ${activeTab === "pacote" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
        >
          Pacotes
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          {activeTab === "servico" ? "Lista de Serviços" : "Lista de Pacotes"}
        </h2>

        <div className="mb-4 space-y-4">
          <input
            type="text"
            placeholder="Filtrar por nome ou descrição"
            value={filtro}
            onChange={(e) => {
              setFiltro(e.target.value);
              setCurrentPage(1); // Reinicia na primeira página ao filtrar
            }}
            className="w-full p-2 border rounded"
          />

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

        <ul className="space-y-4">
          {currentItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-4 bg-gray-100 rounded shadow">
              <div>
                <p className="font-medium text-lg">{item.nome}</p>
                <p className="text-sm text-gray-600">{item.descricao}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleOpenModal(item)} // Passa o item para o modal de edição
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>

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

      {/* Modal de cadastro */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <FormularioServico
            servico={servicoSelecionado}
            onSubmit={(data) => {
              console.log(data); // Implementar lógica de salvar dados
              handleCloseModal();
            }}
            onClose={handleCloseModal}
          />
        </div>
      )}
    </div>
  );
}
