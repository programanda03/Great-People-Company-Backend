using System.ComponentModel.DataAnnotations;

namespace Cadastro_Empresas.Model
{
    public class Empresa
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public string? RazaoSocial { get; set; }
        public string? Cnpj { get; set; }
        public int IdEndereco { get; set; }
        public Endereco EnderecoInfo { get; set; }
        public string? Telefone { get; set; }
        public string? Site { get; set; }
    }
}
