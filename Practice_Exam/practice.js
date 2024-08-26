document.addEventListener('DOMContentLoaded', function() {
    loadXML();
});

function loadXML() {
    const URL = "https://ochre.lib.uchicago.edu/ochre?uuid=a6e6049c-66dc-43ee-968d-e74c4909f496";
    XMLRequest(URL);
};

function XMLRequest(link) {
    var conn =  new XMLHttpRequest();
    conn.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            parseXML(this.responseXML);
        };
    };
    conn.open('GET', link, true);
    conn.send();
    console.log("It's all good here");
};

function parseXML(XML) {
        console.log(XML);

        document.getElementById("title").innerText = XML.getElementsByTagName("metadata")[0].children[1].innerHTML;
        document.getElementById("license_info").innerText = XML.getElementsByTagName("license")[0].innerHTML;

        //var CC = document.getElementById("creative_commons");
        //CC.innerText = XML.getElementsByTagName("availability")[0].children[0].innerHTML;
        //CC.setAttribute("href", XML.getElementsByTagName("availability")[0].children[0].attributes[0].nodeValue);

        var tablets = XML.getElementsByTagName("spatialUnit");
        console.log(tablets);
        for (i=0; i < tablets.length; i++) {
            var tr = document.createElement("tr");
            tr.setAttribute("id", "row_"+i);
            document.getElementById("tableBody").appendChild(tr);
            var td = document.createElement("td");
            td.textContent = tablets[i].children[0].children[0].innerHTML;
            document.getElementById("row_"+i).appendChild(td);
            var td2 = document.createElement("td");
            td2.textContent =  tablets[i].children[1].innerHTML;
            document.getElementById("row_"+i).appendChild(td2);
            var td3 = document.createElement("td");
            td3.textContent = tablets[i].children[2].innerHTML;
            document.getElementById("row_"+i).appendChild(td3);
            var td4 = document.createElement("td");
            td4.textContent = tablets[i].children[4].children[6].textContent;
            document.getElementById("row_"+i).appendChild(td4);
            //Making the unordered list of Tablet Names
            var li = document.createElement("li");
            li.textContent = tablets[i].children[0].children[0].innerHTML;
            document.getElementById("tablets").appendChild(li);    
        }
};