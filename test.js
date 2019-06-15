var myForm = document.forms.myForm;
var message = document.getElementById("message");

myDorm.onsubmit = function(){

    if(myForm.name.value == ""){
        message.innerHTML = "please enter a name"
        return falsel
    } else{
        message.innerHTML = "";
        return true;
    }
};