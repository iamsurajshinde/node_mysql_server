var db = require('../lib/database');
var { getEmployees } = require('../lib/query');
class Employee {

    constructor(router) {
        router.get('/employees', this.login.bind(this));
    }

    login(req, res) {
        db.query(getEmployees, {}, function (err, result) {
            res.render('index', { result: result })
        })
    }
}

module.exports = Employee