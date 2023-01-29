import { Pipe, PipeTransform } from '@angular/core';
import { Vaga } from '../interface/VagasApi/vagas';

@Pipe({
  name: 'filtrovagas'
})
export class FiltroVagasPipe implements PipeTransform {

  transform(vagas: Vaga[], pesquisaNome: string): Vaga[] {
    return vagas.filter(v => v.titulodavaga.toLowerCase().includes(pesquisaNome.toLowerCase()));
  }

}
