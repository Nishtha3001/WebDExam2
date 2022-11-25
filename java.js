var light= document.getElementById("Light");
var pink= document.getElementById("BabyPink");
var blue= document.getElementById("Blue");
var green= document.getElementById("Green");
var black= document.getElementById("Black");

var body= document.getElementById("wholebody")

light.onclick = ()=>{
    body.style.backgroundColor = 'rgb(224, 224, 217)'
};
pink.onclick = ()=>{
    body.style.backgroundColor = 'rgb(233, 198, 204)'
};
blue.onclick = ()=>{
    body.style.backgroundColor = 'rgb(178, 194, 234)'
};
green.onclick = ()=>{
    body.style.backgroundColor = 'rgb(205, 251, 199)'
};
black.onclick = ()=>{
    body.style.backgroundColor = 'rgb(6, 3, 64)'
};

function loadDoc() {
    var name = document.getElementById('inputvalue').value;
    document.getElementById('content').innerHTML = '';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        for(var i = 0; i < response.length; i++){
          let r = response[i].show.image.medium;
          document.getElementById('content').innerHTML = document.getElementById('content').innerHTML + `<img src ='${r}' />`;
        }
      }
    };
    xhttp.open("GET", `https://api.tvmaze.com/search/shows?q=${name}`, true);
    xhttp.send();
  }
  


  