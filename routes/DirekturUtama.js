const router = require('express').Router();

router.get('/DirekturUtama', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get DirekturUtama"
    });
});

router.post('/DirekturUtama', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post DirekturUtama"
    });
});

router.put('/DirekturUtama', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put DirekturUtama"
    });
});

router.delete('/DirekturUtama', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete  DirekturUtama"
    });
});

module.exports = router;