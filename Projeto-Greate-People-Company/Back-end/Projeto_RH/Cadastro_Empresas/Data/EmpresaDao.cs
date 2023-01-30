using Cadastro_Empresas.Model;
using Dapper;
using System.Text;

namespace Cadastro_Empresas.Data
{
    public class EmpresaDao : Dao, ICrud<Empresa>
    {
        public Empresa Alterar(Empresa objeto, int id = 0)
        {
            try
            {
                AbrirConexao();
                if (id > 0)
                {
                    objeto.Id = id;
                }

                int idEndereco = BuscaEmpresa(objeto.Id).IdEndereco;

                string sql = "UPDATE tb_endereco SET logradouro = @log, cep = @cep, cidade = @cidade, uf = @uf, numero = @num WHERE id = @id";
                Endereco e = objeto.EnderecoInfo;
                Conn.Execute(sql, new { log = e.Logradouro, cep = e.Cep, cidade = e.Cidade, uf = e.Uf, num = e.Numero, id = idEndereco });

                sql = "UPDATE tb_empresa SET nome = @nome, razaosocial = @rs, cnpj = @cnpj, telefone = @tel, site = @site WHERE id = @id";

                Conn.Execute(sql, new { nome = objeto.Nome, rs = objeto.RazaoSocial, cnpj = objeto.Cnpj, tel = objeto.Telefone, site = objeto.Site, id = objeto.Id });

                return BuscaEmpresa(objeto.Id);
            }
            finally
            {
                FecharConexao();
            }
        }

        private Empresa CriarEmpresa(EmpresaDTO empresa)
        {
            Empresa empresaBuscada = new Empresa()
            {
                Id = empresa.id,
                IdEndereco = empresa.idendereco,
                Cnpj = empresa.cnpj,
                Nome = empresa.nome,
                Site = empresa.site,
                Telefone = empresa.telefone,
                RazaoSocial = empresa.razaosocial
            };

            var endereco = Conn.QueryFirstOrDefault<Endereco>("Select logradouro, cep, cidade, uf, numero from tb_endereco where id = @id", new { id = empresaBuscada.IdEndereco });

            empresaBuscada.EnderecoInfo = endereco;
            return empresaBuscada;
        }

        private Empresa BuscaEmpresa(int id)
        {
            var empresa = Conn.QueryFirstOrDefault<EmpresaDTO>("Select * from tb_empresa where id = @id", new { id });
            if (empresa != null)
            {
            
                return CriarEmpresa(empresa);
            }
            else
            {
                throw new Exception("Não há nenhuma empresa com este id");
            }
        }

        private Empresa BuscaEmpresa(string? cnpj)
        {
            var empresa = Conn.QueryFirstOrDefault<EmpresaDTO>("Select * from tb_empresa where cnpj = @cnpj", new { cnpj });
            if (empresa != null)
            {
                return CriarEmpresa(empresa);
            }
            else
            {
                throw new Exception("Não há nenhuma empresa com este CNPJ");
            }
        }

        public Empresa Buscar(int id)
        {
            try
            {
                AbrirConexao();
                return BuscaEmpresa(id);
            }
            finally
            {
                FecharConexao();
            }
        }

        public Empresa BuscarPorCnpj(string? cnpj)
        {
            try
            {
                AbrirConexao();
                return BuscaEmpresa(cnpj);
            }
            finally
            {
                FecharConexao();
            }
        }

        public Empresa? Incluir(Empresa objeto)
        {
            try
            {
                AbrirConexao();

                var endereco = objeto.EnderecoInfo;

                string sql = "INSERT INTO tb_endereco (logradouro, cep, cidade, uf, numero) VALUES (@log, @cep, @cid, @uf, @num);";

                Conn.Execute(sql, new { log = endereco.Logradouro, cep = endereco.Cep, cid = endereco.Cidade, uf = endereco.Uf, num = endereco.Numero });

                int ultimoIdEndereco = Conn.QueryFirstOrDefault<int>("Select max(id) from tb_endereco");

                sql = "INSERT INTO tb_empresa (idendereco, nome, razaosocial, cnpj, telefone, site) VALUES (@idEnd, @nome, @rs, @cnpj, @tel, @site)";

                Conn.Execute(sql, new { idEnd = ultimoIdEndereco, nome = objeto.Nome, rs = objeto.RazaoSocial, cnpj = objeto.Cnpj, tel = objeto.Telefone, site = objeto.Site });

                int idEmpresa = Conn.QueryFirstOrDefault<int>("SELECT max(id) FROM tb_empresa");

                return BuscaEmpresa(idEmpresa);

            }
            finally
            {
                FecharConexao();
            }
        }

        public IEnumerable<Empresa> ListarTodos()
        {
            try
            {
                AbrirConexao();

                List<Empresa> listaEmpresas = new List<Empresa>();
                var empresas = Conn.Query<EmpresaDTO>("SELECT * FROM tb_empresa ORDER BY id ASC");
                foreach(var item in empresas) 
                {
                    Empresa empresa = new Empresa()
                    {
                        Id = item.id,
                        IdEndereco = item.idendereco,
                        Cnpj = item.cnpj,
                        Nome= item.nome,
                        Site=item.site,
                        Telefone= item.telefone,
                        RazaoSocial = item.razaosocial
                    };

                    StringBuilder sb = new StringBuilder();

                    sb.Append("SELECT logradouro, cep, cidade, uf, numero FROM tb_endereco WHERE id = @id");

                    var endereco = Conn.QueryFirstOrDefault<Endereco>(sb.ToString(), new { id = item.idendereco });

                    empresa.EnderecoInfo = endereco;

                    listaEmpresas.Add(empresa);
                }
                return listaEmpresas;
                
            }
            finally
            {
                FecharConexao();
            }
        }

        public bool Remover(int id)
        {
            bool b = false;
            try
            {
                AbrirConexao();
                Empresa empresa = BuscaEmpresa(id);

                int registros = Conn.Execute("DELETE FROM tb_empresa WHERE id = @id", new { id });

                Conn.Execute("DELETE FROM tb_endereco WHERE id = @id", new { id = empresa.IdEndereco });
                
                Conn.Execute("DELETE FROM tb_usuarios WHERE nome = @cnpj", new { cnpj = empresa.Cnpj });
                if (registros > 0)
                {

                    b = true;

                }
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                FecharConexao();
            }
            return b;
       
        }
    }
}
