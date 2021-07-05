import express from 'express'
import * as auth from '../controllers/auth.js'

const router = express.Router()

router.get('/:message', auth.showMessage)

export default router
