const Sequelize = require('sequelize')

const connection = new Sequelize('baseName', 'root', 'BurningPenguin25b', {
    dialect: "mysql"
});

connection.authenticate().then(()=>{
    console.log("соединение установлено")
}).catch((err)=>{
    console.log("Ошибка соединения")
})