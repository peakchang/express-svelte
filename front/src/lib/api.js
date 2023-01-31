const fastapi = (operation, url, params, success_callback, failure_callback) => {
    console.log('alsdjflaijdsflja');
    let method = operation
    let content_type = 'application/json'
    let body = JSON.stringify(params)

    let _url = 'http://127.0.0.1:8002' + url
    if (method === 'get') {
        _url += "?" + new URLSearchParams(params)
    }

    let options = {
        method: method,
        headers: {
            "Content-Type": content_type
        }
    }

    if (method !== 'get') {
        options['body'] = body
    }

    fetch(_url, options)
        .then((res) => {
            console.log('sjadfljasdfaaaaaaaaaaa');
            console.log(res);

            res.json().then(json => {
                    console.log('여기는 온걸까??');
                    console.log(json);
                    // if (res.status >= 200 && res.status < 300) {  // 200 ~ 299
                    //     if (success_callback) {
                    //         success_callback(json)
                    //     }
                    // } else {
                    //     if (failure_callback) {
                    //         failure_callback(json)
                    //     } else {
                    //         console.log(JSON.stringify(json));
                    //     }
                    // }
                })
                .catch(error => {
                    console.log(JSON.stringify(error));
                })
        })
}

export default fastapi