# Biblioteca Virtual API

## Descripción

Este proyecto es una API RESTful para gestionar una biblioteca virtual. Permite realizar operaciones de autenticación, gestión de libros, préstamos y compras.

## Requisitos

- Node.js (>= 18.0.0 < 21.0.0)
- npm o pnpm

## Instalación

1. Clona el repositorio:

   git clone <https://github.com/JalfMVZ/biblioteca-rest-api.git>
   cd biblioteca-virtual-api

2. Instala las dependencias:

   npm install

## Configuración

1. **Archivo de Entorno**: Crea un archivo `.env` en la raíz del proyecto y define las variables necesarias, como la cadena de conexión a la base de datos y el puerto del servidor.

   PORT=3000
   DATABASE_URL=tu_url_de_base_de_datos

2. **Base de Datos**: Asegúrate de tener tu base de datos configurada y en funcionamiento.

## Ejecución

Para ejecutar el servidor en modo desarrollo, usa:

npm run dev

Esto ejecutará el servidor con `nodemon`, que reiniciará automáticamente la aplicación al realizar cambios en el código.



La API está documentada utilizando Swagger. Para acceder a la documentación:

1. Asegúrate de que tu servidor esté en ejecución.
2. Abre tu navegador y visita:

   http://localhost:3000/api-docs

Esto abrirá la interfaz de usuario de Swagger, donde podrás ver y probar todas las rutas de la API.

## Rutas Disponibles

### Autenticación
- **POST /api/auth/register**: Registrar un nuevo usuario.
- **POST /api/auth/login**: Iniciar sesión.

### Libros
- **GET /api/books**: Obtener todos los libros.
- **GET /api/books/:id**: Obtener un libro por ID.
- **POST /api/books**: Crear un nuevo libro.
- **PUT /api/books/:id**: Actualizar un libro.
- **DELETE /api/books/:id**: Eliminar un libro.

### Compras
- **POST /api/purchase**: Comprar un libro.

### Préstamos
- **POST /api/loans/:userId/:bookId**: Prestar un libro.
- **PUT /api/loans/:userId/:bookId**: Devolver un libro.

