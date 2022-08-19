
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
    console.log("Se ha conectado a la DataBase con Exito");
})


/* Controlador para Guardar el Apodo el Home */
const milistaController = (req, res) =>{
    
    const { ApodoEX } = req.body;
    console.log(ApodoEX);

      //Validacion basica
    if (ApodoEX == "") {
    let validacion = "¡Esta vacio el campo eh 🤦 !";
    res.render('mimusica', { validacion })
    }
    else {
    let data = {
        Apodo: ApodoEX
    }
   

    let sql = "select * from CANCIONESTABLA where ApodoDB = 'Apodo1'"; //se deberian seleccionar solo las canciones del APODO
    
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        res.render('mimusica', { tabla1: 'CANCIONESTABLA', results})
    })
    };
    
    
}

/* const milistaController = (req, res) => {
    let sql = "SELECT * FROM CANCIONESTABLA";
    const { id, tituloDB, artistaDB, ApodoDB, favDB } = req.body;
    let cancionestabla = {
            id: id,
            titulo: tituloDB,
            artista: artistaDB,
            Apodo: ApodoDB,
            fav: favDB
    }
    console.table([cancionestabla]);
    
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        res.render('mimusica', { tabla1: 'CANCIONESTABLA', results, ApodoDB })
    })
} */



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
    /* selApodo, */
    borrarlista
};
