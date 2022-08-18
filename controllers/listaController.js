
const mysql = require('mysql2');

conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORTDB,
    database: process.env.DATABASE
})

conexion.connect(function (error) {
    if (error) throw error;
    console.log("Se ha conectado a la DB con Exito");
})

const milistaController = (req, res) => {
    let sql = "SELECT * FROM APODOSTABLA";
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        res.render('mimusica', { tabla1: 'APODOSTABLA', results })
    })
}

const borrarlista = (req, res) => {
    console.log(req.body);
    console.log("Eliminado");
    let sql = "DELETE FROM APODOSTABLA WHERE id=" + req.body.id;
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        console.log("Datos eliminados");
        res.redirect('mimusica');
    });
}

module.exports = {
    milistaController,
    borrarlista
};
