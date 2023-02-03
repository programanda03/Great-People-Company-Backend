import { Mesorregiao } from "./mesorregiao";

export interface Microrregiao {
    id: number;
    nome: string;
    mesorregiao: Mesorregiao;
}