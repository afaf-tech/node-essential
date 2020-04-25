const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.get('/time', (req,res)=>{
    res.json({
        time: new Date().toISOString()
    });
});

router.post('/hash', (req,res,next)=>{
    const plainText = req.body.plainText;
    const hash = crypto.createHash('md5').update(plainText).digest('hex');
    res.json({
        plainText,
        hash
    });
})
router.get('/:name', (req,res)=>{
    // hello?name=james
    // let name = req.query.name

    // hello/:name
    const name = req.params.name;
    res.render('hello', { name, title:'hello'});
});


module.exports = router;