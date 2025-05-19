let count = 1;
document.getElementById("radio1").checked = true

function nextVideo() {
    count++;
    if (count > 3) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}