class uploadFileController {
    storeFile(request, response) {
        const { filename } = request.file

        response.json({ file: filename })
    }
}

export default uploadFileController;