namespace Cadastro_Empresas.Model
{
    public struct Endereco
    {
        public string? Logradouro { get; set; }
        public string? Cep { get; set; }
        public string? Cidade { get; set; }
        public string? Uf { get; set; }
        public int Numero { get; set; }
    }
}