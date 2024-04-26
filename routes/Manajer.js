const router = require('express').Router();

router.get('/Manajer', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get Manajer"
    });
});

router.post('/Manajer', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post Manajer"
    });
});

router.put('/Manajer', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put Manajer"
    });
});

router.delete('/Manajer', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete Manajer"
    });
});

module.exports = router;