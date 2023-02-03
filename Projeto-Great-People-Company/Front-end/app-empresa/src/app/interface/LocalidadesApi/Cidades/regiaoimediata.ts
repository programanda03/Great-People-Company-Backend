import { RegiaoIntermediaria } from "./regiaointermediaria";

export interface RegiaoImediata {
    id: number;
    nome: string;
    regiaointermediaria: RegiaoIntermediaria;
}