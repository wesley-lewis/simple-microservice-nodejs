const express = require('express');
const app = express()
const axios = require('axios');
const PORT = 3000

app.get('/', (req, res) => {
	res.send("Hello world");
})

app.get("/todos", (req, res) => {
	axios.get("https://jsonplaceholder.typicode.com/todos")
		.then(response => {
			res.send(response.data);
		})
		.catch((err) => {
			console.error(err);

			res.sendStatus(500);
		})
})

app.listen(PORT, () => {
	console.log("app running on localhost:3000");
})

/*
 * nodejs api are quite low level and most people use packages to make it easier
 */
