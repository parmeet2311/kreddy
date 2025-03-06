import { Dialect, Sequelize } from 'sequelize';
import connection from './config';

const { database, user, port, password, host, dbLogging } = connection;

const sequelizeConnection = new Sequelize(database, user, password, {
	host,
	port,
	logging: dbLogging,
	dialect: 'postgres' as Dialect,
	sync: { force: false },
});

export default sequelizeConnection;
