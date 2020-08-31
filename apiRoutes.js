const fs = require('fs');
const store = require("../db/db.json");

module.exports = function (app) {
    app.get('/api/notes', function(req, res) {
        fs.readFile('./db/db.json', 'utf8', function (err, data){
            if (err) {
                console.log(err);
            }
            store = JSON.parse(data);
            res.json(notes);
        });
    });

    app.post('./api/notes', function(req,res) {
        let newStore = req.body;
        let newId = store.length
        newStore.id = newId;
        store.push(newStore);

        fs.writeFilesSync("./db/db.json", JSON.stringify(content), function(err) {
            if (err) throw (err);
        });
    });
 
    app.delete('./api/notes/:id', function(req, res) {
        let deleteNote = content.find(({id}) => id === JSON.parse(req.params.id));
        content.splice(content.indexOf(deleteContent), 1);
        fs.writeFile("./db/db.json", JSON.stringify(store), function(err) {
            if (err) throw (err);
        });
    });
};