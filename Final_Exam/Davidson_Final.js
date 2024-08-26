document.addEventListener('DOMContentLoaded', function() {
    loadXML();
});

function loadXML() {
    const URL = "xmlSample.xml";
    XMLRequest(URL);
};

//This is for making an API call to the OCHRE server. It's not necessary for a local file,
//but I was having trouble rewriting it.
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

        //I can't get all the rows to display properly but at least I can get a nice Title.
        document.getElementById("title").innerText = XML.getElementsByTagName("metadata")[0].children[1].innerHTML;

        var Florence = XML.getElementsByTagName("spatialUnit");
        console.log(Florence);

        //trying to sort spatialUnit element tags to find only the ones that match the if statement.
        //It's not working but I can at least get the Name and Parish of all the Spatial Units.
        //Maybe I should just use == instead of a strict ===
        //var Flo_correct = XML.getElementsByTagName("spatialUnit")
                            //if (n==="0") {
                                //console.log(Flo_correct)
                            //};

        //Looking within the spatialUnit element for the n=0                  
        //var Flo_correct = XML.getElementsByTagName("spatialUnit").Text_Node("0")

        for (i=0; i < Florence.length; i++) {
            var tr = document.createElement("tr");
            tr.setAttribute("id", "row_"+i);
            document.getElementById("tableBody").appendChild(tr);
            var td = document.createElement("td");
            td.textContent = Florence[i].children[0].children[0].innerHTML;
            document.getElementById("row_"+i).appendChild(td);
            var td2 = document.createElement("td");
            td2.textContent =  Florence[i].children[4].children[1].children[1].innerHTML;
            document.getElementById("row_"+i).appendChild(td2);   
        }

        //assuming that the if statement can narrow down the spatialUnit elements to only n=0 this will be what I will use.
        //for (i=0; i < Flo_correct.length; i++) {
            //var tr = document.createElement("tr");
            //tr.setAttribute("id", "row_"+i);
            //document.getElementById("tableBody").appendChild(tr);
            //var td = document.createElement("td");
            //td.textContent = Flo_correct[i].children[0].children[0].innerHTML;
            //document.getElementById("row_"+i).appendChild(td);
            //var td2 = document.createElement("td");
            //td2.textContent =  Flo_correct[i].children[4].children[1].children[1].innerHTML;
            //document.getElementById("row_"+i).appendChild(td2);   
        //}
};