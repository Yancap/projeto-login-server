const sqliteConnection = require('../../sqlite');
const tableUsers = require('./createTableUsers')

async function migrationsRun(){
    const schemas = [
        tableUsers
    ].join('')
    sqliteConnection().then(db => db.exec(schemas))
    .catch(error => console.error(error))
}

module.exports = migrationsRun