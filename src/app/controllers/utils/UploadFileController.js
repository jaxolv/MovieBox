const uploadFileController = {
    storeFile: (request, response) => {
        const { filename } = request.file

        response.json({ file: filename })
    }
}

module.exports = uploadFileController