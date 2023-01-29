import { Pipe, PipeTransform } from '@angular/core';
import { Empresa } from '../interface/EmpresaApi/empresa';

@Pipe({
  name: 'filtroempresa'
})
export class FiltroEmpresaPipe implements PipeTransform {


  transform(empresas: Empresa[], pesquisaNome: string, pesquisaEstado: string): Empresa[] {
    if (!pesquisaEstado && !pesquisaNome) {
      return empresas;
    }
    if (!pesquisaEstado && pesquisaNome) {
      console.log(this.FiltraPorNome(empresas, pesquisaNome))
      return this.FiltraPorNome(empresas, pesquisaNome);
    } else if (pesquisaEstado && !pesquisaNome) {
      return this.FiltraPorEstado(empresas, pesquisaEstado);
    } else {
      let listaEmpresasEstado = this.FiltraPorEstado(empresas, pesquisaEstado);
      return this.FiltraPorNome(listaEmpresasEstado, pesquisaNome);
    }
  }

  private FiltraPorNome(empresas: Empresa[], pesquisaNome: string): Empresa[] {
    return empresas.filter(e => e.nome.toLowerCase().includes(pesquisaNome.toLowerCase()));
  }
  private FiltraPorEstado(empresas: Empresa[], pesquisaEstado: string): Empresa[] {
    return empresas.filter(e => e.enderecoInfo?.uf.includes(pesquisaEstado));
  }

}
