using Cadastro_Empresas.Model;
using Dapper;
using System;

namespace Cadastro_Empresas.Data
{
    public class UsuarioDao: Dao
    {

        private Usuario? Busca(Usuario usuario)
        {
            string sql = "SELECT u.nome, u.senha, n.descricao as Nivel FROM tb_usuarios u inner join tb_nivel n on u.nivel = n.id where nome = @nome AND senha = @senha";

            var busca = Conn.QueryFirstOrDefault<Usuario>(sql, new { nome = usuario.Nome, senha = usuario.Senha });

            return busca;
        }

        public Usuario? BuscarUsuario(string cnpj)
        {
            string sql = "SELECT u.nome, u.senha, n.descricao as Nivel FROM tb_usuarios u inner join tb_nivel n on u.nivel = n.id where nome = @nome";

            var busca = Conn.QueryFirstOrDefault<Usuario>(sql, new { nome = cnpj });

            return busca;
        }

        public Usuario? Validar(Usuario usuario)
        {
            try
            {
                AbrirConexao();
                return Busca(usuario);
            }
            finally 
            {
                FecharConexao();
            }
        }

        public Usuario? Incluir(Usuario usuario)
        {
            try
            {
                AbrirConexao();

                // Insere usuario para a empresa
                string sql = "INSERT INTO tb_usuarios (nome, senha, nivel) VALUES (@username, @senha, @nivel)";

                Conn.Execute(sql, new
                {
                    username = usuario.Nome,
                    senha = usuario.Senha,
                    nivel = usuario.Nome?.Length == 14 ? 2 : 1
                }) ;

                return Busca(usuario);
            }
            finally
            {
                FecharConexao();
            }
        }

        public Usuario? AlterarSenha(Usuario usuario)
        {
            try
            {
                AbrirConexao();
                string sql = "UPDATE tb_usuarios SET senha = @senha WHERE nome = @username";
                Conn.Execute(sql, new { senha = usuario.Senha, username = usuario.Nome });

                return Busca(usuario); 
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
