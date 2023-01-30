import { Microrregiao } from "./microrregiao";
import { RegiaoImediata } from "./regiaoimediata";

export interface Municipio {
    id: number;
    nome: string;
    microrregiao: Microrregiao;
    regiaoimediata: RegiaoImediata;
}