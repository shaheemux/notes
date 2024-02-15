import mysql from 'mysql2';
import { config } from 'dotenv';
config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}).promise();

async function getFriends() {
    const [friend] = await pool.query(`
      SELECT *
      FROM ouens
    `);
    return friend;
}

async function getFriend(id) {
    const [friend] = await pool.query(`
        SELECT *
        FROM ouens
        WHERE id = ?
    `, [id]);
    return friend;
}

async function addFriend(name, age) {
    const [friend] = await pool.query(`
      INSERT INTO ouens (name, age) VALUES(?, ?)    
    `, [name, age]);
    return getFriend(friend.insertId);
}


async function deleteFriend(id) {
    const [friend] = await pool.query(`
        DELETE FROM ouens
        WHERE id = ?
    `, [id]);
}



async function updateFriend(id) {
    
}
// console.log(await deleteFriend(1))

// Export the functions so they can be imported elsewhere
export { getFriends, getFriend, addFriend, deleteFriend , updateFriend ,addUser , checkUser };
