var myList = document.getElementsByTagName("LI");
for(var i = 0; i < myList.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span)
}

var close = document.getElementsByClassName("close");
for(var i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }

}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("textField").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if(inputValue == ''){
        alert("You must write something!")
    }
    else{
        document.getElementById("myList").appendChild(li);
    }

    document.getElementById("textField").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(var i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    
    }

}


