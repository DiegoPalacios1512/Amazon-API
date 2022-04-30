const req = require('express/lib/request');
const res = require('express/lib/response');

const router = require('express').Router();

router.get('/posts', (req, res) => {
    res.send('Posts from database');
});

module.exports = router;