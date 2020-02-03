const { QueryTypes } = require('sequelize');
module.exports = {
    getEmployees: {
        query: "select contact from employees",
        type: QueryTypes.SELECT
    }
}