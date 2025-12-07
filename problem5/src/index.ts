import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import router from './router';
import { initializeDatabase } from './database/config';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger documentation (Non-production only)
if (process.env.NODE_ENV !== 'production')
{
    const swaggerUi = require('swagger-ui-express');
    const YAML = require('yamljs');

    const swaggerPath = path.join(__dirname, '../swagger/swagger.yaml');
    const swaggerDocument = YAML.load(swaggerPath);

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    console.log('Swagger documentation available at /api-docs');
}

app.use('/api', router);

async function startServer()
{
    const dbConnected = await initializeDatabase();

    if (!dbConnected)
    {
        console.error('Failed to connect to database. Exiting...');
        process.exit(1);
    }

    app.listen(PORT, () =>
    {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();