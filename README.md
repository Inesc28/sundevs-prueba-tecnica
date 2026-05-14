# VIDEO.LAB | Cartelera de Hype Tecnológico

Este proyecto es una plataforma full-stack que procesa datos de la API de YouTube para mostrar una cartelera de videos optimizada, calculando un "Nivel de Hype" basado en interacciones y destacando el contenido más relevante de forma visual.

## 📁 Estructura del Proyecto

El repositorio se divide en dos áreas principales:
- **/backend**: API construida con NestJS que procesa el JSON, aplica lógica de negocio y limpia los datos.
- **/frontend**: Aplicación ReactJS que consume la API y despliega la interfaz moderna.

---

## 🚀 Guía de Inicio Rápido

Sigue estos pasos para levantar el proyecto en tu entorno local.

### 1. Requisitos Previos
Asegúrate de tener instalado:
- **Node.js** (v18.0.0 o superior)
- **npm** (v9.0.0 o superior)

### 2. Instalación de Dependencias

Debes instalar los paquetes en ambas carpetas:

**Para el Backend:**
```bash
cd backend
npm install
```

**Para el Frontend:**
```bash
cd frontend
npm install
```

### 3. Ejecución del Proyecto

Para que la aplicación funcione, ambos servidores deben estar corriendo simultáneamente.

Desde la carpeta /backend:

```bash
npm run start:dev
```

Desde la carpeta /frontend:

```bash
npm run dev
```






