document.addEventListener("DOMContentLoaded", function(){
    chargerPage("home.html","");
});

function chargerPage(htmlDoc, ancla, page){
    
    const http = new XMLHttpRequest();
    var url = "https://delvi2505.github.io/Portafolio/Views/" + htmlDoc;
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("containerPage").innerHTML = this.responseText;
            document.location.href = "#"+ancla;
        }
    }
    http.open("GET", url);
    http.send();
}
//document.getElementById("MyId").addEventListener("click", function(){});
