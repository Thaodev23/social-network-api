const router = require('express').Router();
const {getAllThoughts, getThoughtById, createThought, updateThoughtById, deleteThoughtById } = require('../../controllers/thought.controller');

router.get("/", async (req, res) => {
  try {
    const payload = await getAllThoughts()
    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const payload = await getThoughtById(req.params.id)
    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.post("/", async (req, res) => {
  try {
    const payload = await createThought(req.body);
    console.log("test string")
    res.status(200).json({ result: "success", payload });
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message });
  }
})

router.put("/:id", async (req, res) => {
  try {
    const payload = await updateThoughtById(req.params.id, req.body)
    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const payload = await deleteThoughtById(req.params.id)
    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

module.exports = router;