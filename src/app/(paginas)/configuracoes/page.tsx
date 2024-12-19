"use client";

import { useState } from "react";
import Image from "next/image";

export default function Configuracoes() {
  const [nome, setNome] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [activeTab, setActiveTab] = useState("perfil");

  const usuariosVinculados = [
    {
      id: 1,
      nome: "Jane Doe",
      email: "jane.doe@example.com",
      cargo: "Gerente",
    },
    {
      id: 2,
      nome: "Bob Smith",
      email: "bob.smith@example.com",
      cargo: "Analista",
    },
    {
      id: 3,
      nome: "Alice Johnson",
      email: "alice.johnson@example.com",
      cargo: "Desenvolvedor",
    },
  ];

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">Configurações</h1>
      <div className="bg-white rounded-lg shadow">
        <div className="flex border-b">
          <button
            className={`px-4 py-2 ${
              activeTab === "perfil" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab("perfil")}
          >
            Perfil
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "conta" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab("conta")}
          >
            Dados da Conta
          </button>
        </div>
        <div className="p-6">
          {activeTab === "perfil" ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                  Alterar Foto
                </button>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Salvar Alterações
              </button>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Usuários Vinculados
              </h3>
              <div className="space-y-4">
                {usuariosVinculados.map((usuario) => (
                  <div
                    key={usuario.id}
                    className="flex items-center justify-between border-b pb-2"
                  >
                    <div>
                      <p className="font-medium">{usuario.nome}</p>
                      <p className="text-sm text-gray-600">{usuario.email}</p>
                    </div>
                    <p className="text-sm">{usuario.cargo}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
