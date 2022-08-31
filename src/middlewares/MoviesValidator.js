import * as yup from "yup";

export default async function MoviesValidator(req, res, next) {
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
        rottenTomatometer: yup
            .number()
            .integer()
            .max(100)
            .strict()
            .typeError(),
        rottenAudience: yup
            .number()
            .integer()
            .max(100)
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