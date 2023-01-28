using Cadastro_Empresas.Data;
using Cadastro_Empresas.Model;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Cadastro_Empresas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresasController : ControllerBase
    {
        EmpresaDao dao;
        public EmpresasController()
        {
            dao = new EmpresaDao();
        }

        [HttpGet]
        public IActionResult GetEmpresas([FromQuery(Name = "cnpj")] string? cnpj)
        {
            if(cnpj == null)
            {
                return Ok(dao.ListarTodos());
            }
            else
            {
                try
                {
                    Empresa empresa = dao.BuscarPorCnpj(cnpj);
                    return Ok(empresa);

                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetEmpresa(int id)
        {
            try
            {
                Empresa empresa = dao.Buscar(id);
                return Ok(empresa);

            } catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public Empresa? PostIncluirEmpresa(Empresa empresa) 
        {
            return dao.Incluir(empresa);
        }

        [HttpPut]
        public IActionResult PutEmpresa(Empresa empresa)
        {
            try
            {
                return Ok(dao.Alterar(empresa));
            }
            catch (Exception)
            {
                return BadRequest("Não foi possível alterar seus dados, tente mais tarde ou entre em contato com nossa Central de atendimento - 0800 5540 9635");
            }
        }

        [HttpPut("{id}")]
        public IActionResult PutEmpresa(Empresa empresa, int id)
        {
            try
            {
                return Ok(dao.Alterar(empresa, id));
            }
            catch (Exception)
            {
                return BadRequest("Não foi possível alterar seus dados, tente mais tarde ou entre em contato com nossa Central de atendimento - 0800 5540 9635");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEmpresa(int id)
        {
            try
            {
                return Ok(dao.Remover(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}
