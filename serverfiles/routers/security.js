var express = require('express');
var router = express.Router();

var path = require("path");
var dbManager = require('./../controllers/database');
var adminConf = require('./../conf').conf["session"];
var bcrypt = require('bcrypt');

// Vista del login
router.get('/login/', function(req, res) {
    res.render('seguridad/login', { 
        error: req.flash('error')
    });
});

// Logica del login
router.post('/login/', function(req, res) {

    // Consulta por el usuario
    dbManager.find(adminConf["collection"], {username: req.body.username},
        function(users){
            if(users.length == 0){
                req.flash('error', 'El usuario no existe');
                res.redirect('/login/');
            }else{
                // El usuario existe, ahora hay que comparar la clave
                bcrypt.compare(req.body.password, users[0]["password"]).then(function(pass) {
                    // Es correcto
                    if(pass){
                        req.flash('success', 'Bienvenido');
                        req.session.userId = users[0]["_id"];
                        res.redirect('/'); 
                    }else{
                        req.flash('error', 'Clave incorrecta');
                        res.redirect('/login/');
                    }
                });
            }
        });
});

router.get('/logout/', function(req, res){
    if(req.session){
        req.session.destroy(function(err){
            if(err){
                res.send(err);
            }else{
                res.redirect('/login/');
            }
        });
    }
});

module.exports = router;