const db = require("../data/config")

function findPostsByUserId(userId) {
	/* 
		SELECT posts.id, posts.contents, users.username
		FROM posts
		JOIN users ON users.id = posts.user_id
		WHERE posts.user_id = ?;
	*/
	return db("posts as p")
		.innerJoin("users as u", "p.user_id", "u.id")
		.where("p.user_id", userId)
		.select("p.id", "p.contents", "u.username")
}

module.exports = {
  findPostsByUserId,
}