"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import FormularioServico from "../../../../components/Servicos/FormularioServico";

// Simulação de obtenção de dados de um serviço (se houver)
const obterServico = (id: string) => {
  // Aqui você faria uma requisição ao back-end para obter os dados do serviço
  return {
    id,
    nome: "Serviço Exemplo",
    valor: "100",
    unidadeMedida: "tempo",
    descricao: "Descrição do serviço.",
    arquivo: null,
  };
};

export default function CriarEditarServicoPage() {
  const router = useRouter();
  const { id } = router.query;

  // Estado para verificar se o componente foi montado no cliente
  const [isMounted, setIsMounted] = useState(false);

  // Hook para garantir que o router seja acessado apenas no cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (servico: any) => {
    if (id) {
      // Editar serviço
      console.log("Editando serviço:", servico);
      // Lógica de atualização no back-end
    } else {
      // Criar novo serviço
      console.log("Criando serviço:", servico);
      // Lógica de criação no back-end
    }
  };

  if (!isMounted) {
    return null; // ou um carregamento enquanto o componente é montado
  }

  const servico = id ? obterServico(id as string) : null;

  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight">
        {servico ? "Editar Serviço" : "Criar Novo Serviço"}
      </h1>
      <FormularioServico servico={servico} onSubmit={handleSubmit} />
    </div>
  );
}
