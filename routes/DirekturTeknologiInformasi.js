const router = require('express').Router();

router.get('/DirekturTeknologiInformasi', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get DirekturTeknologiInformasi"
    });
});

router.post('/DirekturTeknologiInformasi', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post DirekturTeknologiInformasi"
    });
});

router.put('/DirekturTeknologiInformasi', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put DirekturTeknologiInformasin"
    });
});

router.delete('/DirekturTeknologiInformasi', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete DirekturTeknologiInformasin"
    });
});

module.exports = router;