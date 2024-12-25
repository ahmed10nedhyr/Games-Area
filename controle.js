function textarea(){
    v=true
    message=document.getElementById("message").value;
    while (message==""){
        document.getElementById("message").style.border = "2px solid rgb(250, 0, 0)";
        return false;
    }
    document.getElementById("message").style.border = "2px solid white";
    return v
}