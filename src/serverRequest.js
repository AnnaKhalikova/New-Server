document.addEventListener("DOMContentLoaded", function () {

    const sendButton = document.getElementById('send') // button send
    sendButton.addEventListener('click', function () {
        let payload = 'name=' + encodeURIComponent(document.getElementById('value').value)

        const request = new XMLHttpRequest()
        request.open('POST', 'http://34.86.152.212:8080/cgi-bin/script.cgi', true)
        
        request.addEventListener('readystatechange', function () {
            if ((request.readyState === 4) && (request.status === 200)) {
                console.log(parseInt(request.responseText.replace(/[^\d]/g, '')));
                document.querySelector("#img").classList.add('opacity');
                document.querySelector("#result").innerHTML = `${parseInt(request.responseText.replace(/[^\d]/g, ''))} % unique`;
            }
        })

        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        request.send(payload)
    })
})
