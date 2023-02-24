const express = require('express')
const router = express.Router()
const { getCareers, setCareer, updateCareer, deleteCareer } = require('../controllers/careerController')
const protect = require('../middlewares/authMiddleware')

router.get('/career', protect, getCareers)

router.post('/career', protect, setCareer)

router.put('/career/:id', protect, updateCareer)

router.delete('/career/:id', protect, deleteCareer)

module.exports = router