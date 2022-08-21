const router = require('express').Router()
const ytdl = require('ytdl-core')
const fs = require('fs')

router.get('/', async(req, res) => {
    res.render('home')
})
router.get(`/download`, async(req, res) => {
    const URL = req.query.URL
    res.header('Content-Disposition', 'attachment; filename="video.mp4')

    ytdl(URL, {
        format: 'mp4'
    }).pipe(res)
})

module.exports = router