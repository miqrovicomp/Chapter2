const router = require('express').Router();

router.get('/Staf', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get Staf"
    });
});

router.post('/Staf', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post Staf"
    });
});

router.put('/Staf', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put Staf"
    });
});

router.delete('/Staf', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete Staf"
    });
});

module.exports = router;