const express = require('express')
let router = express.Router();
const biocontroller = require('./controllers')

//Conseguir todo los empleados
router.get('/employeedb',  biocontroller.readAllSelect);
 
// Conseguir un empleado        
router.get('/employee', biocontroller.readSelect)

//Eliminar un empleado
router.delete('/employeedb', biocontroller.deletedEmployees)

//Insertar un empleado
router.post('/employeedb', biocontroller.postEmployees )

//actualizar un empel
router.put('/employeedb', biocontroller.putEmployees )



module.exports = router

