const path = require('path')
const express = require('express')
const app = express()
const port = 5000

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(express.static(path.resolve(__dirname, './client/public')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})