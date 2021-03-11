const card = document.getElementById("card");
const btn = document.getElementById("btn");
let start = 0; // image number
let data;

let request = new XMLHttpRequest();
request.open("GET", "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json");
request.onload = function() {
    data = JSON.parse(request.responseText).result.results;
    start = renderHTML(data, start);
};
request.send();

btn.addEventListener("click", function() {
    start = renderHTML(data, start);
    if(start > data.length){
        let finish = document.createElement("div");
        finish.textContent = "No more data ...";
        btn.parentNode.appendChild(finish);
        btn.parentNode.removeChild(btn);
    }
});

function renderHTML(data, start) {
        try{
            for (i = start; i < start + 8; i++) {
                let li = document.createElement("li");
                let img = document.createElement("img");
                img.src = data[i].file.match(/.*?\.(jpg|png)/i)[0];
                let h2 = document.createElement("h2");
                h2.textContent = data[i].stitle;
                card.appendChild(li);
                li.appendChild(img);
                li.appendChild(h2);
            };
        }
        catch{
            return start = data.length + 1;
        }
return start + 8;
};