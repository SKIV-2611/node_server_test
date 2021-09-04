const sql = require('mssql');
/*const sqlConfig = {
  server: '(localdb)\\MSSQLLocalDB',
  options: {
    database: 'DBS_gridContext-6a8df6d3-4faa-4384-9f7e-5aa4364bc234',
	port: 1433,
    trustedConnection: true,
    MultipleActiveResultSets: true
  }
  
};*/
const sqlConfig = {
	server: '(localdb)\\MSSQLLocalDB',
    database: 'DBS_gridContext-6a8df6d3-4faa-4384-9f7e-5aa4364bc234',
	port: 1433,
    options: {
		trustedConnection: true,
        encrypt: false,
		multipleActiveResultSets: true
    }
}

async() => {
    try {
        //make sure that any items are correctly URL encoded in the connection string
		//await sql.connect('Server=(localdb)\\mssqllocaldb;Database=DBS_gridContext-6a8df6d3-4faa-4384-9f7e-5aa4364bc234;Trusted_Connection=True;MultipleActiveResultSets=true');
        //await sql.connect('Server=(localdb)\\mssqllocaldb;Database=DBS_gridContext-6a8df6d3-4faa-4384-9f7e-5aa4364bc234;Trusted_Connection=True');
		await sql.connect(sqlConfig)
		const result = await sql.query`select * from dbo.PaymentOrder`
		console.dir(result)
    } catch (err) {
        // ... error checks
		console.dir(err)
    }
}