"use strict";
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const forceDatabaseRefresh = false;

// Middleware para analizar JSON en las solicitudes entrantes
app.use(express.json());

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

// Redirigir todas las rutas no definidas al frontend para manejar SPA (React/Angular)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

// Usar rutas de la API
app.use('/api', routes);

// Sincronizar base de datos y arrancar servidor
sequelize.sync({ force: forceDatabaseRefresh })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
    });
