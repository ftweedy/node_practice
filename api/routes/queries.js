const Pool = require('pg').Pool
const pool = new Pool ({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432
})

getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error){
            throw error
        }
        response.status(200).json(results.row)
    })
}

createUser = (request, response) => {
    const { name, email } = request.body
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error) => {
        if (error){
            throw error
        }
    })
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error){
            throw error
        }
        response.status(200).json(results.row)
    })
}

updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name } = request.body
    pool.query(
        'UPDATE users SET name = $1 WHERE id = $2', [name, id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.row)
        }
    )
}

deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM users WHERE id = $1', [id], (error) => {
        if (error){
            throw error
        }
    })
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}