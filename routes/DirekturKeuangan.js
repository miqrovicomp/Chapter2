const router = require('express').Router();

router.get('/DirekturKeuangan', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get DirekturKeuangan"
    });
});

router.post('/DirekturKeuangan', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post DirekturKeuangan"
    });
});

router.put('/DirekturKeuangan', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put DirekturKeuangan"
    });
});

router.delete('/DirekturKeuangan', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete DirekturKeuangan"
    });
});

module.exports = router;