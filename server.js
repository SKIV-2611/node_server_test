const sql = require('mssql');
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
		await sql.connect(sqlConfig)
		const result = await sql.query`select * from dbo.PaymentOrder`
		console.dir(result)
    } catch (err) {
		console.dir(err)
    }
}