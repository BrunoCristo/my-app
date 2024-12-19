"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import AvatarEditor from "react-avatar-editor";

export default function Configuracoes() {
  const [nome, setNome] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [fotoPerfil, setFotoPerfil] = useState("/placeholder.svg");
  const [nomeConta, setNomeConta] = useState("Minha Empresa");
  const [nomeFantasia, setNomeFantasia] = useState("Minha Fantasia");
  const [razaoSocial, setRazaoSocial] = useState("Razão Social Ltda.");
  const [endereco, setEndereco] = useState("Rua Exemplo, 123");
  const [telefone, setTelefone] = useState("(11) 1234-5678");
  const [activeTab, setActiveTab] = useState("perfil");
  const [image, setImage] = useState(null); // Para armazenar a imagem carregada

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setImage(URL.createObjectURL(acceptedFiles[0]));
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Aceita apenas imagens
  });

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
          <button
            className={`px-4 py-2 ${
              activeTab === "usuarios" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab("usuarios")}
          >
            Usuários da Conta
          </button>
        </div>
        <div className="p-6">
          {activeTab === "perfil" ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <AvatarEditor
                    image={image || fotoPerfil}
                    width={100}
                    height={100}
                    border={50}
                    scale={1.2}
                    rotate={0}
                  />
                </div>
                <div {...getRootProps()} className="cursor-pointer">
                  <input {...getInputProps()} />
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    Alterar Foto
                  </button>
                </div>
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
          ) : activeTab === "conta" ? (
            <div>
              <h3 className="text-lg font-semibold mb-4">Dados da Conta</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="nomeConta"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome da Conta
                  </label>
                  <input
                    id="nomeConta"
                    type="text"
                    value={nomeConta}
                    onChange={(e) => setNomeConta(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="nomeFantasia"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome Fantasia
                  </label>
                  <input
                    id="nomeFantasia"
                    type="text"
                    value={nomeFantasia}
                    onChange={(e) => setNomeFantasia(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="razaoSocial"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Razão Social
                  </label>
                  <input
                    id="razaoSocial"
                    type="text"
                    value={razaoSocial}
                    onChange={(e) => setRazaoSocial(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="endereco"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Endereço
                  </label>
                  <input
                    id="endereco"
                    type="text"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="emailConta"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="emailConta"
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
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold mb-4">Usuários da Conta</h3>
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
