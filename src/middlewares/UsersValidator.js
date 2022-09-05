import * as yup from "yup";

export default async function UsersValidator(req, res, next) {
    const schema = yup.object().shape({
        name: yup
            .string()
            .strict()
            .required()
            .min(10)
            .max(60)
            .strict()
            .typeError(),
        username: yup
            .string()
            .strict()
            .required()
            .min(5)
            .max(12)
            .typeError(),
        biography: yup
            .string()
            .strict()
            .max(255)
            .typeError(),
        age: yup
            .number()
            .required()
            .strict()
            .integer()
            .typeError()
            .min(10),
        country: yup
            .string()
            .length(3)
            .strict()
            .uppercase()
            .typeError(),
        email: yup
            .string()
            .required()
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