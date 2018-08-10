// Require express
var express = require("express");

// Setting up express router connection
var router = express.Router();

// Importing the burgers.js to use DB functions
var burgers = require("../models/burger.js")

// Setting up the router functions to connect to our app
router.get("/", function (req, res) {
    burgers.all(function (burger_data) {
        console.log(burger_data);
        res.render("index",{burger_data});
    })
})

//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//         console.log("requesting burgers");
//         res.sendStatus(200);
//     });
// });

router.post("/burgers", function (req, res) {
    burgers.create([
        "burger_name", "devoured"
    ], [
            req.body.burger_name, req.body.devoured
        ],   function (result) {
            res.json({ id: result.insertID });
        });
}); 

router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/burgers/:id", function(req, res){ 
    var condition = "id = " + req.params.id;

    burgers.delete(condition, function(result){
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js
module.exports = router;