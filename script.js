function writeData() {
    //Initialize localstorage/array stuff
    let commentsArray = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
    localStorage.setItem('comments', JSON.stringify(commentsArray));

    //Get value from input field "comment" in HTML doc
    var nameValue = document.getElementById("comment").value;

    //Push input data to comments array
    commentsArray.push(nameValue);

    //Store new array in localstorage
    localStorage.setItem('comments', JSON.stringify(commentsArray));
}

function getData() {
    if(localStorage.getItem('comments') != null) {
        let innerHTMLVar = '<ul>';
        let data = JSON.parse(localStorage.getItem('comments'));
        for(i = 0; i < data.length; i++) {
            innerHTMLVar += '<li>' + data[i] + '</li>'
        }

        innerHTMLVar += '</ul>';

        document.getElementById("commentsView").innerHTML = innerHTMLVar;

    } else {
        document.getElementById("commentsView").innerHTML = "";
    }
}

function clearStorage() {
    localStorage.clear();
    location.reload();
}
