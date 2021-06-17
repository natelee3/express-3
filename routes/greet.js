'use strict';

const express = require('express');
const router = express.Router();

router.get('/:name?', (req, res) => {
    const {name} = req.params;
    res.render('template', {
        locals: {
            title: 'Personal Greeting',
            name: name
        },
        partials: {
            partial: 'partial-greet'
        }
    })
})

module.exports = router;

