module.exports = {
  development: {
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    host: process.env.MYSQL_DB_HOST,
    port: process.env.MYSQL_DB_PORT,
    database: process.env.MYSQL_DB_NAME,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  //   test: {
  //     username: process.env.CI_DB_USERNAME,
  //     password: process.env.CI_DB_PASSWORD,
  //     database: process.env.CI_DB_NAME,
  //     host: '127.0.0.1',
  //     port: 3306,
  //     dialect: 'mysql',
  //     dialectOptions: {
  //       bigNumberStrings: true
  //     }
  //   },
  //   production: {
  //     username: process.env.PROD_DB_USERNAME,
  //     password: process.env.PROD_DB_PASSWORD,
  //     database: process.env.PROD_DB_NAME,
  //     host: process.env.PROD_DB_HOSTNAME,
  //     port: process.env.PROD_DB_PORT,
  //     dialect: 'mysql',
  //     dialectOptions: {
  //       bigNumberStrings: true,
  //       ssl: {
  //         ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
  //       }
  //     }
  //   }
};

