const yup = require('yup')
const ListMovieService = require('../app/services/films/ListMovieService')

async function MoviesValidator(req, res, next) {
    const schema = yup.object().shape({
        title: yup
            .string()
            .strict()
            .required()
            .typeError(),
        subtitle: yup
            .string()
            .strict()
            .typeError(),
        year: yup
            .number()
            .integer()
            .strict()
            .max(2022)
            .typeError(),
        country: yup
            .string()
            .uppercase()
            .length(3)
            .strict()
            .typeError(),
        duration: yup
            .number()
            .required()
            .positive()
            .integer("A duração deve ser informada em minutos.")
            .strict()
            .typeError("Informe a duração do filme em minutos"),
        genre: yup
            .array()
            .required()
            .max(2)
            .strict()
            .typeError(),
        imdb: yup
            .number()
            .max(10),
        rotten: yup
            .object({
                tomatometer: yup
                    .number()
                    .integer()
                    .max(100),
                audience: yup
                    .number()
                    .integer()
                    .max(100)
            })
            .strict()
            .typeError()
    })

    await schema.validate(req.body).catch(err => {
        return res.status(400).json({
            message: err.errors
        })
    })

    next()
}

async function IndexValidator(req, res, next) {
    const schema = yup.object().shape({
        id: yup
            .number()
            .integer()
            .min(1)
            .max(ListMovieService.itens().length)
    })

    await schema.validate(req.params).catch(err => {
        return res.status(400).json({
            message: err.errors
        })
    })

    next()
}

module.exports = {
    MoviesValidator,
    IndexValidator
}