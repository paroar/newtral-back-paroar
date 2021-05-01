import { Router } from "express"
import Politician from "./../models/Politicians.js"

const politiciansRouter = Router();

politiciansRouter.get("/", async (req, res) => {
    try {
        const politicians = await Politician.find().limit(50)
        res.json(politicians);
    } catch (error) {
        res.statusCode(400).json({ message: error })
    }
});

politiciansRouter.get("/:politicianId", async (req, res) => {
    try {
        const politician = await Politician.findById(req.params.politicianId)
        res.json(politician);
    } catch (error) {
        res.statusCode(400).json({ message: error })
    }
});

politiciansRouter.post("/", async (req, res) => {
    const politician = new Politician({
        // name: req.body.name,
        // party: req.body.party,
        // sex: req.body.sex,
        // charge: req.body.charge,
        // institution: req.body.institution,
        // ccaa: req.body.ccaa,
        // salary: req.body.salary,
    })

    try {
        const savedPolitician = await politician.save()
        res.json(savedPolitician)
    } catch (error) {
        res.statusCode(400).json({ message: error })
    }
})

politiciansRouter.patch("/:politicianId", async (req, res) => {
    try {
        const updatedPolitician = await Politician.updateOne(
            { _id: req.params.politicianId },
            {
                $set: {
                    // name: req.body.name,
                    // party: req.body.party,
                    // sex: req.body.sex,
                    // charge: req.body.charge,
                    // institution: req.body.institution,
                    // ccaa: req.body.ccaa,
                    // salary: req.body.salary,
                }
            })
        res.json(updatedPolitician)
    } catch (error) {
        res.statusCode(400).json({ message: error })
    }
})

politiciansRouter.delete("/:politicianId", async (req, res) => {
    console.log(req.params.politicianId)
    try {
        const removedPolitician = await Politician.deleteOne({ _id: req.params.politicianId })
        res.json(removedPolitician);
    } catch (error) {
        res.statusCode(400).json({ message: error })
    }
})

export default politiciansRouter