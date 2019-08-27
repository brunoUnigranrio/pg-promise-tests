const pgPromise = require('pg-promise')();

export default class UserRepository {
    async init() {
        const cn = {
            host: "localhost",
            port: 5432,
            database: 'pgtest',
            user: "pgtest",
            password: "pgtest"
        }
        
        const db = await pgPromise(cn);
        try {
            db.any(`
            CREATE TABLE IF NOT EXISTS 'user' (
                userid INT NOT NULL,
                username VARCHAR(60),
                email VARCHAR(70)
            );
            ALTER TABLE 'user' (
                ADD PRIMARY KEY(userid);
            )
            `)
            const users = db.any(`SELECT  * FROM users`)
            console.log(users);
        } catch(e) {
            console.log(e);
        }
    }
}