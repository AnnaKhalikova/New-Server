document.addEventListener("DOMContentLoaded", function () {

    const sendButton = document.getElementById('send')
    sendButton.addEventListener('click', function () {
        let payload = 'name=' + encodeURIComponent(document.getElementById('value').value)

        const request = new XMLHttpRequest()
        request.open('POST', 'http://34.86.152.212:8080/cgi-bin/script.cgi', true)

        request.addEventListener('readystatechange', function () {

            if ((request.readyState === 4) && (request.status === 200)) {
                	    
            } else {
                console.log('ops...!')
            }
        })

        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        request.send(payload)
    })
})