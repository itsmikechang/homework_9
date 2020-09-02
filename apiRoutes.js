const fs = require("fs");
const store = require("./db/db.json");

module.exports = function(app) {
    
    app.get('/api/notes', function(req, res) {
        res.json(store);
      });
    
    app.post('/api/notes', function(req, res) {
        let newStore = req.body;
        let newId = store.length
        newStore.id = newId;
        store.push(newStore);

        fs.writeFileSync("./db/db.json", JSON.stringify(store), function(err) {
            if (err) throw (err);
        });

        res.json("ok");
    });

    app.delete('/api/notes/:id', function(req, res) {
        let deleteStore = store.find(({id}) => id === JSON.parse(req.params.id));
        store.splice(store.indexOf(deleteStore), 1);
        fs.writeFile("./db/db.json", JSON.stringify(store), function(err) {
            if (err) throw (err);
            res.json("Note Deleted");
        });
    });
    
    }