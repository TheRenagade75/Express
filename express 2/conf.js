const  mysql = require('mysql');
const  connexion = mysql.createConnection({
host :  'localhost', // adresse du serveur
port : '8889',
user :  'root', // le nom d'utilisateur
password :  'root', // le mot de passe
database :  'sqlquests', // le nom de la base de données
});
module.exports = connexion;