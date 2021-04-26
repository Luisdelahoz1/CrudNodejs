const conexion = require('./conectedDB')

module.exports = {
    
    readAllSelect: (req, res) => {
        conexion.query('SELECT * FROM employees', (error, rows, fields) => {
            if (!error)
                res.send(rows);
            else
                console.log(error);
        })
    },

    readSelect: (req, res) =>{                            //[0].EmpID
        conexion.query('SELECT empID, name, dni, phone, description FROM employees` WHERE 1', (error, rows, fields)=>{
            if(!error)
                res.send(rows);
                else
                console.log(error);
        })
    },

    deletedEmployees: (req, res) => { 
        console.log(req.body);
        res.send('employees');
        conexion.query('DELETE FROM `employees` WHERE 1 ',(error, rows) => {
            if(error)
                res.send('Delete sucessful', rows); 
                console.log(error);
        })
    },

    postEmployees: (req, res) => {
        console.log(req.body);
        res.send('employees')
        conexion.query('INSERT INTO employees(empID, name, dni, phone, description ) VALUES ("3","William" ,"4465456465", "46546546", "tecnicall")'
        ,(error, rows )=> {
            if (error) throw error;
            console.log('Registrado correctamente', rows);
            });
        },

        putEmployees: (req, res)=>{
            console.log(req.body)
            res.send('employees')
            conexion.query("UPDATE employees SET name = 'rodo', dni = ? WHERE empID = ?", [req.body.first_name, req.body.last_name, req.body.id],   (error, rows, field)=> {
                if (error) throw error;
                     console.log('Updated successfully', rows);
            });
        },

}

