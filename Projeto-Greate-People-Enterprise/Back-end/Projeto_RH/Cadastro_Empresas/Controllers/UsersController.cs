using Cadastro_Empresas.Data;
using Cadastro_Empresas.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Cadastro_Empresas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        UsuarioDao usuarioDao;
        public UsersController() 
        {
            usuarioDao= new UsuarioDao();
        }

        [HttpGet]
        public Usuario? GetUsuarioCnpj([FromQuery(Name = "cnpj")] string cnpj) {
            return usuarioDao.BuscarUsuario(cnpj);
        }

        [HttpPost]
        public Usuario? PostUsuario(Usuario usuario, [FromQuery(Name = "novo")] bool novo, string? cnpj)
        {
            if (novo)
            {
                return usuarioDao.Incluir(usuario);
            }
            return usuarioDao.Validar(usuario);
        }

        [HttpPut]
        public Usuario? PutSenhaUsuario(Usuario usuario)
        {
            if (usuario == null)
            {
                return null;
            }
            return usuarioDao.AlterarSenha(usuario);
        }
    }
}
