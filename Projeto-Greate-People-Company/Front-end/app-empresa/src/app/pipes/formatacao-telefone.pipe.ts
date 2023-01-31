import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatacaotelefone'
})
export class FormatacaoTelefonePipe implements PipeTransform {

  transform(telefone: string): string {
    if (telefone.length == 11) {
      return telefone.replace(/(\d{2})?(\d{5})?(\d{4})/, "($1) $2-$3");
    } else {
      return telefone.replace(/(\d{2})?(\d{4})?(\d{4})/, "($1) $2-$3");
    }
  }

}
