export const imageUpload = async (file) => {
    const cloudUrl = `https://api.cloudinary.com/v1_1/db85pny5o/upload`
    console.log(cloudUrl)
    console.log(file)

    const formData = new FormData();
    
    formData.append('file', file)
    formData.append('upload_preset', 'react-journal')

    try {   
        const respuesta = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })

        if (respuesta.ok) {
            const cloudResp = await respuesta.json()
            return cloudResp.secure_url
        } else {
            throw await respuesta.json()
        }

    } catch (error) {
        console.log(error)
    }

}