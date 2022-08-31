import * as yup from "yup";

export default async function IndexValidator(req, res, next) {
    const schema = yup.object().shape({
        id: yup
            .string()
            .length(36)
            .lowercase()
    })

    await schema.validate(req.params).catch(err => {
        return res.status(400).json({
            message: err.errors
        })
    })

    next()
}