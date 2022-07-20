const yup = require('yup')
const ListMovieService = require('../app/services/films/ListMovieService')

async function IndexValidator(req, res, next) {
    const list = ListMovieService.itens()

    const schema = yup.object().shape({
        id: yup
            .number()
            .integer()
            .min(1)
            .max(list.length)
    })

    await schema.validate(req.params).catch(err => {
        return res.status(400).json({
            message: err.errors
        })
    })

    next()
}

module.exports = IndexValidator