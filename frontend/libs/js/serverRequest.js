document.addEventListener("DOMContentLoaded", function () {

    const sendButton = document.getElementById('send') // button send
    sendButton.addEventListener('click', submitForm () {
        let payload = 'name=' + encodeURIComponent(document.getElementById('value').value)

        const request = new XMLHttpRequest()
        request.open('POST', 'http://34.86.152.212:8080/cgi-bin/script.cgi', true)

        request.addEventListener('readystatechange', function () {

            if ((request.readyState === 4) && (request.status === 200)) {
                const form = document.forms.submitAI
                const result = form.querySelector('#result');
              
                // all dynamic elements should be located inside one form
                // in that case all we need to copy paste the same code of form from html
                // in every new project, just ctrl+c / ctrl+v
                
                const container = document.querySelector('#container');
                const result = document.querySelector('#result');
                const content = document.querySelector('#content');
                const subtitle = document.querySelector("#subtitle");
                const serverAnswer = document.querySelector("#serverAnswer");

                container.addEventListener('click', event => {
                    if (event.target.id === "send") {
                        result.classList.remove('hide');
                        result.classList.add('show');

                        content.classList.remove('show');
                        content.classList.add('hide');

                        subtitle.innerHTML = "The result of checking the text for uniqueness";
                        serverAnswer.innerHTML = `Your text is ${request.responseText} percents unique`;
                    }

                    if (event.target.id === "back") {
                        result.classList.remove('show');
                        result.classList.add('hide');

                        content.classList.remove('hide');
                        content.classList.add('show');

                        subtitle.innerHTML = "Intelligent App for text processing";
                    }
                })
            } 
        })

        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        request.send(payload)
    })
})
