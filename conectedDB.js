const mysql = require('mysql');

const conexion = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeedb'

});

//conexion a mysql
conexion.connect((error ) =>{
    if(error){
        throw error;
    } else {
         console.log('DB Conexion exitoso')
    }
});

module.exports = conexion;