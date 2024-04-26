const router = require('express').Router();

router.get('/DirekturPemasaran', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get DirekturPemasaran"
    });
});

router.post('/DirekturPemasaran', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post DirekturPemasaran"
    });
});

router.put('/DirekturPemasaran', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put DirekturPemasaran"
    });
});

router.delete('/DirekturPemasaran', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete DirekturPemasaran"
    });
});

module.exports = router;