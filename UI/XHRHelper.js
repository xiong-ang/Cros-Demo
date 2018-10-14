var xmlhttp = undefined;
var onSuccessHandler = undefined;

function loadXMLDoc(url, onSucceed) {
    xmlhttp = null;
    if (window.XMLHttpRequest) {// code for all new browsers
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {// code for IE5 and IE6
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp != null) {
        onSuccessHandler = onSucceed;
        xmlhttp.onreadystatechange = state_Change;
        xmlhttp.open("GET", url, true);
        xmlhttp.send(null);
    }
    else {
        alert("Your browser does not support XMLHTTP.");
    }
}

function state_Change() {
    if (xmlhttp.readyState == 4) {// 4 = "loaded"
        if (xmlhttp.status == 200) {// 200 = OK
            // ...our code here...
            onSuccessHandler(xmlhttp.response);
        }
        else {
            alert("Problem retrieving XML data");
        }
    }
}