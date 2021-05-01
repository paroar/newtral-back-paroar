import { Router } from "express"
import Politician from "./../models/Politicians.js"

const politiciansRouter = Router();

politiciansRouter.get("/", async (req, res) => {
    const {page = 0, limit = 50} = req.query
    try {
        const politicians = await Politician.find().skip(page*limit).limit(limit)
        const count = await Politician.countDocuments();
        res.json({
            politicians, 
            totalPages: Math.ceil(count/limit) - 1, 
            currentPage: page
        });
    } catch (error) {
        res.status(400).json({ message: error })
    }
});

politiciansRouter.get("/:politicianId", async (req, res) => {
    try {
        const politician = await Politician.findById(req.params.politicianId)
        res.json(politician);
    } catch (error) {
        res.status(400).json({ message: error })
    }
});

politiciansRouter.post("/", async (req, res) => {
    const politician = new Politician({
        TITULAR: req.body.TITULAR,
        PARTIDO: req.body.PARTIDO,
        PARTIDO_PARA_FILTRO: req.body.PARTIDO_PARA_FILTRO,
        GENERO: req.body.GENERO,
        CARGO: req.body.CARGO,
        CARGO_PARA_FILTRO: req.body.CARGO_PARA_FILTRO,
        INSTITUCION: req.body.INSTITUCION,
        CCAA: req.body.CCAA,
        SUELDOBASE_SUELDO: req.body.SUELDOBASE_SUELDO,
        COMPLEMENTOS_SUELDO: req.body.COMPLEMENTOS_SUELDO,
        PAGASEXTRA_SUELDO: req.body.PAGASEXTRA_SUELDO,
        OTRASDIETASEINDEMNIZACIONES_SUELDO: req.body.OTRASDIETASEINDEMNIZACIONES_SUELDO,
        TRIENIOS_SUELDO: req.body.TRIENIOS_SUELDO,
        RETRIBUCIONMENSUAL: req.body.RETRIBUCIONMENSUAL,
        RETRIBUCIONANUAL: req.body.RETRIBUCIONANUAL,
        OBSERVACIONES: req.body.OBSERVACIONES,
    })

    try {
        const savedPolitician = await politician.save()
        res.json(savedPolitician)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

politiciansRouter.patch("/:politicianId", async (req, res) => {
    try {
        const updatedPolitician = await Politician.updateOne(
            { _id: req.params.politicianId },
            {
                $set: {
                    TITULAR: req.body.TITULAR,
                    PARTIDO: req.body.PARTIDO,
                    PARTIDO_PARA_FILTRO: req.body.PARTIDO_PARA_FILTRO,
                    GENERO: req.body.GENERO,
                    CARGO: req.body.CARGO,
                    CARGO_PARA_FILTRO: req.body.CARGO_PARA_FILTRO,
                    INSTITUCION: req.body.INSTITUCION,
                    CCAA: req.body.CCAA,
                    SUELDOBASE_SUELDO: req.body.SUELDOBASE_SUELDO,
                    COMPLEMENTOS_SUELDO: req.body.COMPLEMENTOS_SUELDO,
                    PAGASEXTRA_SUELDO: req.body.PAGASEXTRA_SUELDO,
                    OTRASDIETASEINDEMNIZACIONES_SUELDO: req.body.OTRASDIETASEINDEMNIZACIONES_SUELDO,
                    TRIENIOS_SUELDO: req.body.TRIENIOS_SUELDO,
                    RETRIBUCIONMENSUAL: req.body.RETRIBUCIONMENSUAL,
                    RETRIBUCIONANUAL: req.body.RETRIBUCIONANUAL,
                    OBSERVACIONES: req.body.OBSERVACIONES,
                }
            })
        res.json(updatedPolitician)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

politiciansRouter.delete("/:politicianId", async (req, res) => {
    console.log(req.params.politicianId)
    try {
        const removedPolitician = await Politician.deleteOne({ _id: req.params.politicianId })
        res.json(removedPolitician);
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

export default politiciansRouter