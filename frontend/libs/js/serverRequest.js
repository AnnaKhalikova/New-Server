document.addEventListener("DOMContentLoaded", function () {
    let payload = 'name=' + encodeURIComponent(document.getElementById('value').value)

    const request = new XMLHttpRequest()
    request.open('POST', 'http://34.86.152.212:8080/cgi-bin/script.cgi', true)

    request.addEventListener('readystatechange', function () {

        if ((request.readyState === 4) && (request.status === 200)) {
            function onSubmitForm() {
                event.preventDefault()
                resultContent.classList.remove('hide');
                resultContent.classList.add('show');

                testContent.classList.remove('show');
                testContent.classList.add('hide');

                subtitle.innerHTML = "The result of checking the text for uniqueness";
            }

            function returnBack() {
                testContent.classList.remove('hide');
                testContent.classList.add('show');

                resultContent.classList.remove('show');
                resultContent.classList.add('hide');

                subtitle.innerHTML = "Intelligent App for text processing";
            }
        } else {
            alert("Something wrong!")
        }
    })

    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    request.send(payload)
})