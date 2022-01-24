const imageUpload = async (...images) => {
    let imgArr = [];
    let response = {};
    for(let item of images) {
        const formData = new FormData();
        formData.append('file', item);
        formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUD_UPDATE_PRESET);
        formData.append('cloud_name', process.env.NEXT_PUBLIC_CLOUD_NAME)

        const res = await fetch(process.env.NEXT_PUBLIC_CLOUD_API, {
            method: 'POST',
            body: formData
        });
        const data = await res.json();
        response = data;
    }
    return response;
}

export {imageUpload};