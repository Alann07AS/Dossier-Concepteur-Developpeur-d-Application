// Function to load HTML content into the body
function loadHTMLContent(file, el, anchor = true) {
    if (!file || !el) return
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    // Configure it: GET-request for the URL /static/mdHTML/filename.html

    xhr.open('GET', window.location.pathname + 'static/mdHTML/' + file, true);

    // Set the callback function
    xhr.onreadystatechange = function () {
        // If the request is completed and was successful
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Insert the HTML content into the body
            el.classList.toggle("markdown-body", true)
            el.innerHTML = xhr.responseText;
            if (window.location.href.includes("github")) {
                document.body.querySelectorAll('img')
                .forEach(i => i.src += window.location.pathname)
            }
            if (anchor) window.location.href = "#" + el.id
        }
    };

    // Send the request
    xhr.send();
}
