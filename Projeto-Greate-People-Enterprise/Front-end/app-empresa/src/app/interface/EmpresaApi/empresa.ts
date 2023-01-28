import { Endereco } from "./endereco";

export interface Empresa {
    id?: number;
    nome: string;
    razaoSocial: string;
    cnpj: string;
    idEndereco?: number;
    enderecoInfo?: Endereco;
    telefone: string;
    site: string;
}