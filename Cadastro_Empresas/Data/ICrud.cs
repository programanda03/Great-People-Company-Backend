namespace Cadastro_Empresas.Data
{
    public interface ICrud<T>
    {
        T? Incluir(T objeto);
        IEnumerable<T> ListarTodos();
        T Buscar(int id);
        T Alterar(T objeto, int id = 0);
        bool Remover(int id);
    }
}
