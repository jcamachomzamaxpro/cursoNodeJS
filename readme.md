
<h1 align="center">
  <br>
  <a href="https://nodejs.org/es"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" alt="Markdownify" width="300"></a>
  <br>
  <br>
  Curso Node JS
  <br>
</h1>

<h4 align="center">Documentacion de mi aprendizaje con <a href="http://electron.atom.io" target="_blank">Node JS</a>.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://img.shields.io/badge/node%20JS-grey?style=for-the-badge&logo=node.js"
         alt="Gitter">
  </a>
  <a href="https://gitter.im/amitmerchant1990/electron-markdownify"><img src="https://img.shields.io/badge/Javascript-yellow?style=for-the-badge&logo=javascript&logoColor=white"></a>
  
</p>

<p align="center">
  <a href="#introduccion">Introduccion</a> •
  <a href="#tabla-de-contenido-global">Contenido</a> •
  <a href="#autor">Autor</a> •
  <a href="#creditos">Creditos</a> 
</p>

<p align="center">
<img src="https://media.geeksforgeeks.org/wp-content/uploads/20220714231642/pm2.gif">

</p>

## Tabla de Contenido (Global)

* [Introduccion](#introduccion)
* [NodeJS Sin Librerias Externas](#node-js-sin-librerias-externas)
  * [Modulos](#modulos)
    - [File System](#file-system-fs)
    - [Http](#http)
    - [Url](#url)
+ [Otros Conceptos](#otros-conceptos)
+ [Dependencias](#dependencias)
  - [Nodemon](#nodemon)
  - [Slugify](#slugify)
- [Autor](#autor)
- [Creditos](#creditos)

<br>
<br>
<br>

# Introduccion
En esta documentacion estaré subiendo mis aprendizajes de `NodeJS`. Esta es la `version 1.0` de este readme y espero que si algun compañero ve esto le sirva como ayuda para aprender o reforzar ciertos temas ya que a mi si me ayudó. Y se tiene como objetivo terminar el curso que de momento esta siendo de mucha ayuda, es muy bueno.


<br>
<br>
<br>

# Node JS sin librerias externas

### Modulos


Se importan los modulos File System (fs), Http y Url

``` javascript
const fs = require("fs");
const http = require("http");
const url = require("url");
```

## File System (fs)

**readFile :** *(metodo)*, lee un archivo de forma asincrona

```javascript
fs.readFile('rutaDelArchivo', 'el encoding', 'callback')
```

y en algo mas practico ya seria algo asi 

```javascript
fs.readFile('./archivo.txt', 'utf-8', (error, data) => {
  console.log("El archivo contiene: ", data);
})
```

**writeFile :** *(metodo)*, Escribe el contenido que tendrá el archivo.

```javascript
fs.writeFile('rutaDelArchivo', 'contenido a agregar' , 'el encoding', 'callback')
```

mas practico seria asi

```javascript
const datos = 'Texto que se escribirá en el archivo';

fs.writeFile('./archivo.txt', datos, 'utf-8', error => {
  if (error) {
    console.log(error)
  }
  console.log('Texto/datos agregados correctamente');
})
```
  
  
## Http

**createServer :**  *(metodo)*, crea el servidor, para luego ser ejecutado mediante otro metodo listen.

``` javascript
const server = http.createServer( (req, res) => {

})
```

  - **Request (req) :** Es el pedido que le hacemos al servidor 
  - **Response (res) :** Es la respuesta que recibimos del servidor 

    ``` javascript
    const server = http.createServer( (req, res) => {
      console.log(req.url)
      // req.url recoge todo lo que escribamos en la url que valla despues del http://localhost:5000/
      res.writeHead(404, {
          'Content-type': 'text/html'
      });
      // res.writeHead() nos pone el codeStatus que queramos y que sea acorde, ya sea pagina no disponbile o funcionando y tambien nos genera los Headers, en este caso el header habilita las caracteristicas html haciendo que el codigo de abajo sirva el h1
      res.end("<h1>Page not Found!</h1>");
      // res.end dibuja en pantalla lo que se le inserte
    })
    ```

**listen :** Es el metodo para accionar el servidor ya creador anteriormente y su estructura es asi: 

``` javascript
server.listen(puerto, 'hostname', callback) 
```
si no le ponemos hostname, lo detecta como localhost, asi:

``` javascript
server.listen(5000, () => {
  console.log('Servidor Activo')
}) 
```

## Url  

**parse :** *(metodo)*,  se utiliza para analizar una URL en sus componentes individuales, como el protocolo, el nombre de host, el puerto, la ruta y los parámetros de consulta. Esto es útil cuando deseas manipular o extraer información específica de una URL.

```javascript
const urlString = "https://www.ejemplo.com:8080/ruta/subruta?param1=valor1&param2=valor2";

const parsedUrl = url.parse(urlString, true);

console.log(parsedUrl.protocol); // Imprimirá 'https:'
console.log(parsedUrl.host);     // Imprimirá 'www.ejemplo.com:8080'
console.log(parsedUrl.pathname); // Imprimirá '/ruta/subruta'
console.log(parsedUrl.query);    // Imprimirá un objeto con los parámetros de consulta { param1: 'valor1', param2: 'valor2' }
```

<br>
<br>
<br>

# Otros Conceptos

**__dirname :** es mejor practica que el ".", __dirname es donde se encuentra el archivo actual muy detalladamente con todos las rutas anteriores


<br>
<br>
<br>


# Dependencias

Antes de instalar cualquier dependencia tenemos que tener nuestro `package.json`

```bash
npm init -y
```

Listo ya podemos empezar

### Nodemon
Es una herramienta muy util durante la `fase de desarrollo` de la aplicacion, ya que:

> + Reinicia nuestra aplicación `Node JS` cada vez que detecta que se han realizado modificaciones en los archivos del proyecto

La `instalacion` es la siguiente:

```bash
npm install nodemon
```

Listo, para `usarla` tenemos que dirigirnos al archivo `package.json`.
y nos dirigimos justo a esta parte:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

Y nos debe quedar tal que asi:

```json
"scripts": {
    "dev": "nodemon ./index.js"
// "nombreParaEjecutarlo": "nodemon" "rutaDelArchivoAEjecutar"
  }

```

Ya para `ejecutarlo` tenemos que ir a la `terminal` del visual y poner:

```bash
# npm run nombreQueLePusimos

npm run dev
```

<br>

### Slugify
Permite crear una cadena de texto que generalmente se usa en las URL, nombres de archivos.

La `instalacion` es la siguiente:

```bash
npm install slugify
```

Un `ejemplo` de como `usarlo`:
  

```javascript
const texto = "Ejemplo de TEXTO pAra Convertir en Slug!";
const slug = slugify(texto, {
  lower: true,    // Convertir todo a minúsculas
  strict: true    // Eliminar caracteres especiales
});

console.log(slug);  
// Imprimirá "ejemplo-de-texto-para-convertir-en-slug"
```

<br>

## Creditos

Estos softwares me ayudaron:

- [Node.js](https://nodejs.org/)




## Autor
---

> [amitmerchant.com](https://www.amitmerchant.com) 
> GitHub [@Julian Camacho](https://github.com/amitmerchant1990)


