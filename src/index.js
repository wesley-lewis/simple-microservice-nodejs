const express = require('express');
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
	res.send("Hello world");
})

app.get("/todos", (req, res) => {
	res.send("Get todos!");
})

app.listen(PORT, () => {
	console.log("app running on localhost:3000");
})

/*
 * nodejs api are quite low level and most people use packages to make it easier
 *
 *
 */
