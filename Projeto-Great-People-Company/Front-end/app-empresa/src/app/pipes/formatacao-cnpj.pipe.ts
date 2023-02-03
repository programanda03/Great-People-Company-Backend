import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatacaocnpj'
})
export class FormatacaoCnpjPipe implements PipeTransform {

  transform(cnpj: string): string {
    const cnpjFormatado = cnpj.replace(/(\d{2})?(\d{3})?(\d{3})?(\d{4})?(\d{2})/, "$1.$2.$3/$4-$5")
    return cnpjFormatado;
  }

}
