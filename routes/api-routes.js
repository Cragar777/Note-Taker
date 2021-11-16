const router = require("express").Router();
const fs = require("fs");
const noteDb = require ("../db/db.json");

router.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, results) => {
        if (err) {throw err};
        res.send(results);
    });
});

router.post("/api/notes", (req, res) => {
    if (noteDb.length == 0){
        req.body.id = "0";
    } else{
        req.body.id = JSON.stringify(JSON.parse(noteDb[noteDb.length - 1].id) + 1);
    };
    fs.readFile("./db/db.json", (err, results) => {
        if (err) {throw err};
    var notes = JSON.parse(results);
    notes.push(req.body);
    console.log(notes);
    fs.writeFile("./db/db.json", JSON.stringify(notes), err => {
        if (err) {throw err};
        res.json(req.body);
    })
    });
});

module.exports = router;