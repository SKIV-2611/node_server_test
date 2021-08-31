const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

const sql = require('mssql');
const sqlConfig = {
  server: 'localhost',
  options: {
    database: 'DBS_gridContext-6a8df6d3-4faa-4384-9f7e-5aa4364bc234',
	port: 1433,
    trustedConnection: true,
    MultipleActiveResultSets: true
  }
  
};

(async()=> {
    try {
        //make sure that any items are correctly URL encoded in the connection string
        await sql.connect(sqlConfig);
		const result = await sql.query`select * from dbo.PaymentOrder; GO`
		console.dir(result)
    } catch (err) {
        // ... error checks
		console.log(err)
    }
})();