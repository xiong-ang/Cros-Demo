using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace WebAPI.Controllers
{
    public class APIController : ApiController
    {
        [HttpGet]
        [Route("api/str")]
        public string getStr()
        {
            //Set cros
            var response = HttpContext.Current.Response;
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Headers.Add("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
            response.Headers.Add("Access-Control-Allow-Headers", "x-auth-token,Origin,Access-Token,X-Requested-With,Content-Type, Accept");
            return "Cros Result";
        }
    }
}
