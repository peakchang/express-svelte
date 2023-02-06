exports.processFile = async (file) => {

    return new Promise(function (resolve, reject) {
        // Load the data into an image url
        // then convert raw Image into webp format && resizing 
        let rawImage = new Image();
        this.webpurl = null;

        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext("2d");

        rawImage.onload = function () {
            if (rawImage.src) {
                var width = rawImage.width;
                var height = rawImage.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;

                ctx.drawImage(rawImage, 0, 0, width, height);
                canvas.toBlob(function (blob) {
                    console.log("this webpurl", this.webpurl);
                    resolve(blob);
                }, "image/webp");
            }
        };

        rawImage.src = URL.createObjectURL(file);
        rawImage.crossOrigin = 'Anonymous';

    })
}