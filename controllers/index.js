var db = require('../lib/database');
var { getEmployees } = require('../lib/query');
class Admin {
    constructor(router) {
        router.get('/', this.login.bind(this));
    }

    login(req, res) {
        db.query(getEmployees, {}, function (err, result) {
            res.render('index', { result: result })
        })
    }
}

module.exports = Admin