import { UserPlus, Building2, FileText, Briefcase } from "lucide-react";

export default function Cadastros() {
  const cadastros = [
    {
      titulo: "Novo Usuário",
      icone: UserPlus,
      descricao: "Cadastre um novo usuário no sistema",
    },
    {
      titulo: "Nova Empresa",
      icone: Building2,
      descricao: "Adicione uma nova empresa ao banco de dados",
    },
    {
      titulo: "Novo Contrato",
      icone: FileText,
      descricao: "Crie um novo contrato para uma empresa",
    },
    {
      titulo: "Nova Negociação",
      icone: Briefcase,
      descricao: "Inicie uma nova negociação com um cliente",
    },
  ];

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">Cadastros</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cadastros.map((cadastro, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{cadastro.titulo}</h3>
              <cadastro.icone className="h-6 w-6 text-gray-400" />
            </div>
            <p className="text-sm text-gray-600 mb-4">{cadastro.descricao}</p>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Cadastrar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
