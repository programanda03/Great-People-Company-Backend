using Npgsql;

namespace Cadastro_Empresas.Data
{
    public abstract class Dao
    {
        private string Conexao => "Server=127.0.0.1;Port=5432;User Id=postgres;Password=mg7112003;Database=dbrecursoshumanos";
        protected NpgsqlConnection Conn { get; set; }
        public Dao()
        {
            Conn = new NpgsqlConnection(Conexao);
        }

        public void AbrirConexao()
        {
            Conn.Open();
        }

        public void FecharConexao()
        {
            Conn.Close();
        }
    }
}
