const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//GET all feedback that have been placed, populate with data with feedback collection

router.get ('/', (req,res) => {
    //Find all feedback and return them
    let queryText = 'SELECT * FROM "feedback" ORDER BY "id"'
    pool.query(queryText).then(result => {
    res.send(result.rows);
}).catch((error) => {
    console.log('Error GET feed/feedback', error);
    res.sendStatus(500);
});
});
// adds a new feedback to the page
router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('Adding feedback', newFeedback);
    let queryText = `INSERT INTO "feedback"
    ("feeling", "understanding", "support",
     "comments") VALUES($1, $2, $3, $4); `;
    pool.query(queryText, [newFeedback.feeling, 
        newFeedback.understanding, 
        newFeedback.support, newFeedback.comments]).then(result => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('Error adding new feedback', error);
            res.sendStatus(500);
        });

    });

module.exports = router;