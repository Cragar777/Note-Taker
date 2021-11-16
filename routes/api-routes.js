const router = require("express").Router();
const fs = require("fs");

router.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, results) => {
        if (err) {throw err};
        res.send(results);
    });
});

router.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, results) => {
        if (err) {throw err};
    var notes = JSON.parse(results);
    notes.push(req.body)
    console.log(notes);
    fs.writeFile("./db/db.json", JSON.stringify(notes), err => {
        if (err) {throw err};
        res.json(req.body);
    })
    });
});

module.exports = router;