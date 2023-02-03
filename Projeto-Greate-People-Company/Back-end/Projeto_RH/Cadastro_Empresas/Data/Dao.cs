using Npgsql;

namespace Cadastro_Empresas.Data
{
    public abstract class Dao
    {
        //private string Conexao => "Server=127.0.0.1;Port=5432;User Id=postgres;Password=mg7112003;Database=dbrecursoshumanos";
        private string Conexao => "Server=impacta-scania.postgres.database.azure.com;Database=dbrecursoshumanos;Port=5432;User Id=scania@impacta-scania;Password=Passw0rd;Trust Server Certificate=true;";
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
