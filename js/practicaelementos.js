var zoom = function(){
    var thumb = document.getElementById("thumb");
    
    if (thumb.className =="thumb") {
        thumb.setAttribute("class","thumb grande");
    }else{
        thumb.setAttribute("class","thumb");
    }
    
}