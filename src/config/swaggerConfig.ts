const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Biblioteca Virtual API",
      version: "1.0.0",
      description:
        "API para gestionar una biblioteca virtual con autenticación, gestión de libros, préstamos y compras.",
    },
    servers: [
      {
        url: "https://biblioteca-rest-api.onrender.com",
        description: "Servidor local",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

export default swaggerOptions;
