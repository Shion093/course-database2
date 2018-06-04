module.exports = {
  client     : 'mysql2',
  debug      : 'true',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'databasesii'
  },
  migrations : {
    tableName : 'migrations',
  },
};
