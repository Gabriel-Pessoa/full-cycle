require('dotenv').config();

export const env = {
    "database": {
        "mysql": {
            "host": process.env.MYSQL_DB_HOST,
            "port": process.env.MYSQL_DB_USER,
            "user": process.env.MYSQL_DB_USER,
            "password": process.env.MYSQL_DB_PASSWORD,
            "database": process.env.MYSQL_DB,
        },
    },
    "authentication": {
        "apiKey": process.env.AUTH_API_KEY
    },
};
