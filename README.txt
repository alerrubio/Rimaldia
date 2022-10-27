INFORMACIÓN DE RIMALDÍA

Rimaldía es una red social en la cual los usuarios amantes de la poesía pueden 
compartir sus creaciones en línea, participar en foros de discusión de temas 
relevantes en el mundo de la poesía, guardar sus poemas o rimas favoritos y más.

ESTRUCTURA DE LA APLICACIÓN
Se tiene una carpeta para la API de Backend que contiene toda la información de
los modelos (collections), controladores y configuración requerida para Rimaldía.

Rutas:
	Controladores:
		Rimaldia > Backend > src > controllers

		La carpeta de controladores guarda toda la lógica de los 
		endpoints de cada modelo.

	Modelos
		Rimaldia > Backend > src > models

		La carpeta de modelos guarda la estructura representativa de 
		cada schema de la base de datos.

	Routers
		Rimaldia > Backend > src > routes

		La carpeta de routers guarda las rutas necesarias para poder
		acceder a los endpoints de la aplicación.

	Plug-ins
		Rimaldia > Backend > node_modules

		La carpeta de plug-ins guarda todos los plugins necesarios
		para el funcionamiento del código de backend.

También se cuenta con una carpeta llamada frontend que guarda todo el código de 
React con el que construimos la interfáz gráfica del usuario.

Rutas:
	api
		Rimaldia > frontend > api
		
		Carpeta que contiene una api sencilla que consumimos para traer
		información dummy para el llenado de algunos componentes.

	Dependencias
		Rimaldia > front > node_modules

		La carpeta guarda todos las dependencias necesarias para el 
		funcionamiento del código de frontend
	public
		Rimaldia > front > public
		
		Carpeta que contiene archivos accesibles para el público. Por el 
		momento guardamos imágenes de perfil de ejemplo.
	src
		Rimaldia > front > src
		
		Contiene todo el código fuente de la aplicación de frontend. Dentro
		de esta carpeta viven otras 3 carpetas:
		
		assets: se guardan assets extras para el proyecto.

		components: guarda todos los componentes y sus hojas de estilo.

		screens: guarda todas las pantallas y sus hojas de estilo.


INTEGRANTES DEL EQUIPO
Alejandro Tijerina Hinojosa - 1837575
Kevin Alejandro García Briones - 1810223
Alejandra Rodríguez Rubio - 19886242
David Armando Ruiz Uribe - 1887868
Laura Cecilia García Ortiz - 1864988