import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camposopcionais'
})
export class CamposopcionaisPipe implements PipeTransform {

  transform(valorCampo: string): string {
    return valorCampo == "" ? "Nenhum" : valorCampo;
  }

}
