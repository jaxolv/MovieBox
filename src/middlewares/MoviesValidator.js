const yup = require('yup')

async function MoviesValidator(request, response, next) {
    const schema = yup.object().shape({
        title: yup.string().strict().required().typeError(),
        subtitle: yup.string().strict().typeError(),
        year: yup.number().integer().strict().max(2022).typeError(),
        country: yup.string().uppercase().length(3).strict().typeError(),
        duration: yup.number().required().positive().integer().strict().typeError(),
        genre: yup.array().required().max(2).strict().typeError(),
        imdb: yup.number().max(10),
        rotten: yup.object({
            tomatometer: yup.number().integer().max(100),
            audience: yup.number().integer().max(100)
        }).strict().typeError()
    })

    await schema.validate(request.body).catch(err => {
        return response.status(400).json({
            message: err.errors
        })
    })

    next()
}

module.exports = MoviesValidator