export const env = {
    "app":{
        "environmentType": process.env.NODE_ENV,
        "serverPort": process.env.APP_SERVER_PORT,
    },
    "database": {
        "mysql": {
            "user": process.env.MYSQL_DB_USER,
            "password": process.env.MYSQL_DB_PASSWORD,
            "host": process.env.MYSQL_DB_HOST,
            "port": process.env.MYSQL_DB_PORT,
            "databaseName": process.env.MYSQL_DB_NAME,
        },
    }
};