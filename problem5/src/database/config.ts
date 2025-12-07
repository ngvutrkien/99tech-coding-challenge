import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
	host: process.env.DB_HOST || 'localhost',
	port: parseInt(process.env.DB_PORT || '5432'),
	database: process.env.DB_NAME || 'testdb',
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || 'root',
	max: 20,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 2000,
});

export const initializeDatabase = async () =>
{
	try
	{
		const client = await pool.connect();
		await client.query('SELECT NOW()');
		client.release();
		console.log('Database connection established successfully');
		return true;
	}
	catch (error)
	{
		console.error('Database connection failed:', error);
		return false;
	}
};