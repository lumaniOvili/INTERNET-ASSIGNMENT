// assign4_partB.js

document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("add_button");
    var delButton = document.getElementById("del_button");
    addButton.addEventListener("click", function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    createStickyNotes(response);
                } else {
                    console.error("XHR request failed with status:", xhr.status);
                }
            }
        };
        xhr.open("GET", "./partB_json/programmingLanguagesStory.json", true);
        xhr.send();
    });
    delButton.addEventListener("click", function() {
        var stickies = document.getElementById("stickies");
        stickies.innerHTML = ""; // Clear all existing sticky notes
    });
});

function createStickyNotes(data) {
    var stickies = document.getElementById("stickies");
    stickies.innerHTML = ""; // Clear existing stickies
    data.forEach(function(item) {
        var note = document.createElement("li");
        note.innerHTML = item.name + " (" + item.year + ")<br>" + item.contribution + ".<br><br>";
        note.style.backgroundColor = "#" + (Math.random().toString(16) + '000000').slice(2, 8).toUpperCase();
        stickies.appendChild(note);

        // Add event listener to delete the note when clicked
        note.addEventListener("click", function() {
            this.parentNode.removeChild(this); // Remove the clicked note
        });
    });
}


