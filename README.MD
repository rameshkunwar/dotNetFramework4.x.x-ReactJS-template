### React JS template for ASP.NET MVC/Web API (.net framework 4.x.x).

Webpack is configured in a way it injects scripts and styles inside _Layout.cshtml based on a template file _Template.cshtml.

Webpack splits the output bundle as well as hashed name is used to force the browser to reload if any changes has been made.

### Installation
1. Install all Nuget packages by right-clicking the Solution (on Visual Studio) and selecting Restore Nuget Packages.
2. React dependencies:
	- Go to the root folder, which is wwwroot on the command prompt or can also be done using Visual Studio Code. Right-click the folder wwwroot and 
	select Open With Code. Use Visual Studio Code to run `npm install`
	- Alternatively, open *wwwroot* on command prompt and type 'npm install'

### Running
1. On Visual Studio Code terminal or command prompt, type `npm run start` for development or `npm run build` for production.
2. Hit F5 on Visual Studio to run IIS Express.
3. Application will be loaded in the choosen browser (in Visual Studio).

> Remember, I have used two names above Visual Studio and Visual Studio Code!

#### I recommend using Visual Studio Code for front-end developement.