const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const TYPES = require('tedious').TYPES;

const config = {
  server: '(localdb)\MSSQLLocalDB',
  authentication: {
      type: 'default',
      options: {
          userName: 'sa',
          password: '$aHyumebo'
      }
  },
  options: {
      database: 'DBS_gridContext-6a8df6d3-4faa-4384-9f7e-5aa4364bc234'
  }
}


var connection = new Connection(config);
console.log('Still not Connected');
// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
  }
});

console.log('Still not Connected');