using DemoCore.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoCore
{
    public class Startup
    {
        //the entry point to configuration data
        private IConfigurationRoot _configurationRoot;

        public Startup(IHostingEnvironment hostingEnvironment)
        {
            _configurationRoot = new ConfigurationBuilder()
                .SetBasePath(hostingEnvironment.ContentRootPath)
                //.AddJsonFile("appsettings.json")
                //load app settings file based on the enviornment... make sure there is appsettings.production.json file
                .AddJsonFile($"appsettings.{hostingEnvironment.EnvironmentName}.json", true)
                .Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            //setup dependency injection
            //transient will ensure that every time its invoked it will return a new one
            //AddScoped - once every request
            //AddSingleton - once per application

            services.AddTransient<ICategoryRepository, CategoryRepository>();
            services.AddTransient<IPieRepository, PieRepository>();

            //bind the connection string
            services.AddDbContext<AppDbContext>(options => options.UseSqlServer(_configurationRoot.GetConnectionString("DefaultConnection")));

            //bind user connection string
            services.AddDbContext<UserDbContext>(options => options.UseSqlServer(_configurationRoot.GetConnectionString("UserConnection")));

            //specifying the use of identity with built in classes
            services.AddIdentity<IdentityUser, IdentityRole>()
                .AddEntityFrameworkStores<UserDbContext>();

            //adds mvc
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            ////middleware components

            if (env.IsDevelopment())
            {
                //enable useful error pages
                app.UseDeveloperExceptionPage();

                //add support for text only headers - for common status codes
                //allows to handle response status codes between 400 - 600
                app.UseStatusCodePages();
            }
            else
            {
                app.UseExceptionHandler("/AppException");
            }

            //enable the site to serve static files
            app.UseStaticFiles();

            //configure use of identity in the application
            app.UseIdentity();

            //https://stackoverflow.com/questions/34628536/asp-net-5-angular-2-routing-template-page-not-reloading
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                // when the user types in a link handled by client side routing to the address bar 
                // or refreshes the page, that triggers the server routing. The server should pass 
                // that onto the client, so Angular can handle the route
                routes.MapRoute(
                    name: "spa-fallback",
                    template: "{*url}",
                    defaults: new { controller = "Home", action = "Index" }
                );
            });


            //sets up mvc with default routing schema
            //app.UseMvcWithDefaultRoute();

            DbInitializer.Seed(app);
        }
    }
}
