declare module 'swagger-jsdoc' {
    interface SwaggerOptions {
      definition: any;
      apis: string[];
    }
    export default function swaggerJsdoc(options: SwaggerOptions): any;
  }