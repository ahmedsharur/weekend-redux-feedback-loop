const express = require('');
const router = express.router();
const pool = require('../modules/pool')

//GET all feedback that have been placed, populate with data with feedback collection

router.get ('/', (req,res) => {
    //Find all feedback and return them
    pool.query('SELECT * FROM "feedback"')
}).then((result) => {
    res.send(result.rows);
}).catch((error) => {
    console.log('Error GET feed/feedback', error);
    res.sendStatus(500);
});