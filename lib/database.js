var Sequelize = require('sequelize'),
    dbConfig = require('./configLoader').databaseConfig;

let sequelize = null
class Database {

    constructor() {
        this.init()
    }
    init() {
        sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
            host: dbConfig.host,
            port: dbConfig.port,
            dialect: dbConfig.dialect,
            pool: {
                max: 7,
                min: 0,
                idle: 100000,
                acquire: 100000
            },
            logging: false
        })

        sequelize
            .authenticate()
            .then((success) => {
                console.log("connected to database");
            }, (err) => {
                console.log("error in connecting to database", err);
            });
    }

    async query(queryHead, replacements, callback) {
        await sequelize.query(queryHead.query, { replacements: replacements, type: queryHead.type })
            .then(result => {
                callback(null, result);
            }).catch(err => {
                callback(err, null);
            });
    }
}

var db = new Database();

module.exports = db
