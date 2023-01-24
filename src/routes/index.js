import {Router} from 'express'
const router = Router()

router.get('/', (req, res) => res.render('index'))

router.get('/about', (req, res) => res.render('about'))

router.get('/room', (req, res) => res.render('room'))

router.get('/bogota', (req, res) => res.render('reservabog'))

router.get('/medellin', (req, res) => res.render('reservamed'))

router.get('/cali', (req, res) => res.render('reservacali'))

router.get('/sanandres', (req, res) => res.render('reservasana'))

router.get('/guatape', (req, res) => res.render('reservaguata'))

router.get('/cartagena', (req, res) => res.render('reservacar'))

export default router
