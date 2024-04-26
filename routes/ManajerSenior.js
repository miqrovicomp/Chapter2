const router = require('express').Router();

router.get('/ManajerSenior', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get ManajerSenior"
    });
});

router.post('/ManajerSenior', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post ManajerSenior"
    });
});

router.put('/ManajerSenior', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put ManajerSenior"
    });
});

router.delete('/ManajerSenior', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete ManajerSenior"
    });
});

module.exports = router;