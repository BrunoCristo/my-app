import { useState } from "react";
import { Edit, Trash, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";

export default function CriarEditarServicoPage() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [unidade, setUnidade] = useState<string>("tempo");
  const [medida, setMedida] = useState("")
  const [descricao, setDescricao] = useState("");
  const [arquivo, setArquivo] = useState<File | null>(null);

  const handleUnidadeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnidade(e.target.value);
    setValor(""); // Limpa o valor ao mudar a unidade
  };

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!inputValue || !isNaN(Number(inputValue))) {
      setValor(inputValue);
    }
  };

  const handleArquivoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setArquivo(file);
  };

  const handleSubmit = () => {
    // Lógica para enviar os dados do serviço
    console.log({
      nome,
      valor,
      unidade,
      descricao,
      arquivo,
    });
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">Cadastrar Novo Serviço</h1>

      <div className="bg-white rounded-lg shadow p-8">
        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Nome do Serviço</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite o nome do serviço"
              className="p-2 border rounded w-full"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Descrição do Serviço</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Digite a descrição do serviço"
              className="p-2 border rounded w-full"
            />
          </div>

          <div>
          <label className="block mb-2 font-medium">
            Valor
          </label>
          <input
            id="valor"
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className="w-full p-2 border rounded"
            required
            step="0.01"
            min="0"
          />
        </div>

          <div>
            <label className="block mb-2 font-medium">Unidade de Medida</label>
            <select
              value={unidade}
              onChange={handleUnidadeChange}
              className="p-2 border rounded w-full"
            >
              <option value="tempo">Tempo</option>
              <option value="largura">Largura</option>
              <option value="pixels">Pixels</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Medida</label>
            <input
              type="text"
              value={medida}
              onChange={handleValorChange}
              placeholder={`Digite o valor em ${unidade}`}
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Arquivo Exemplo</label>
            <input
              type="file"
              onChange={handleArquivoChange}
              className="p-2 border rounded w-full"
            />
            {arquivo && (
              <div className="mt-2 text-sm text-gray-600">
                Arquivo Selecionado: {arquivo.name}
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-4 mt-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Salvar
                
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
