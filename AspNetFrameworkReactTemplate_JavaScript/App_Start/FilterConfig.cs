using System.Web;
using System.Web.Mvc;

namespace AspNetFrameworkReactTemplate_JavaScript
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
