let upperCase = document.getElementById("upper-case");
upperCase.addEventListener("click", function () {
    document.querySelector(".text").value = document.querySelector(".text").value.toUpperCase();
})

let lowerCase = document.getElementById("lower-case");
lowerCase.addEventListener("click", function () {
    document.querySelector(".text").value = document.querySelector(".text").value.toLowerCase();
})

let properCase = document.getElementById("proper-case");
properCase.addEventListener("click", function () {
    let str = document.querySelector("textarea").value;
    str = str.toLowerCase();
    str = str.split(" ");
    for(let i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    document.querySelector("textarea").value = str.join(" ");
})

let sentenceCase = document.getElementById("sentence-case");
sentenceCase.addEventListener("click", function () {
    let sentences = document.querySelector("textarea").value.toLowerCase().split('. ');
    let modifiedSentences = [];
    for (let sentence of sentences) {
        let modifiedSentence = sentence.charAt(0).toUpperCase().concat(sentence.slice(1));
        modifiedSentences.push(modifiedSentence);
    }
    document.querySelector("textarea").value = modifiedSentences.join('. ');
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

let saveFile = document.getElementById("save-text-file");
saveFile.addEventListener("click", function () {
    let str = document.querySelector("textarea").value;
    download("text.txt", str);
})