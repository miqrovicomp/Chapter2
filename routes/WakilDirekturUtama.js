const router = require('express').Router();

router.get('/WakilDirekturUtama', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get WakilDirekturUtama"
    });
});

router.post('/WakilDirekturUtama', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post WakilDirekturUtama"
    });
});

router.put('/WakilDirekturUtama', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put WakilDirekturUtama"
    });
});

router.delete('/WakilDirekturUtama', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete WakilDirekturUtama"
    });
});

module.exports = router;