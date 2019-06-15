var content = document.getElementById("content");
var button = document.getElementById("swoe-more");

button.onclick = function(){

    if(content.className == "open")
        //shrink the box
        content.className = "";
        button/innetHTMS = "Show More";
} else{
    //expand the box
    content.className = "open";
    button.innterHTML = "Show Less";    
}
};