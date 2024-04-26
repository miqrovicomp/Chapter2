const router = require('express').Router();

router.get('/Supervisor', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get Supervisor"
    });
});

router.post('/Supervisor', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post Supervisor"
    });
});

router.put('/Supervisor', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put Supervisor"
    });
});

router.delete('/Supervisor', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete Supervisor"
    });
});

module.exports = router;