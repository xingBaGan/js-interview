export default function XHR(url, successLoad) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                resolve(JSON.parse(request.responseText))
            }
        }
        request.open('GET', url)
        request.send();
    })
}