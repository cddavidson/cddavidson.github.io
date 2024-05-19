document.addEventListener('DOMContentLoaded', function() {
    loadXMLDOC();
});

function loadXMLDOC() {
    //const baseURL= "https://ochre.lib.uchicago.edu/ochre?uuid=a6e6049c-66dc-43ee-968d-e74c4909f496"
    const baseURL = 'sample-1.xml';

    //make a new XHR
    let xmlhttp = new XMLHttpRequest();

    //This is the package that the API receives
    xmlhttp.onreadystatechange = function () {
        //This is just checking that the server is online and ready
        if (this.readyState === 4 && this.status === 200) {

            //This transforms the response into an XML document and it must be passed out to the next function
            let xmlDoc = this.responseXML;
            printData(xmlDoc);
        }
    };
    //Open the XHR exchange
    xmlhttp.open("GET", baseURL);

    xmlhttp.send();
};

function parseData(xmlDoc) {
    
    let objectData = xmlDoc.getElementsByTagName("spatialUnit");
    for (let i = 0; i < objectData.length; i++) {
        let newRow = document.createElement("tr")
        newRow.id = "row"+i;
        document.getElementById("tableBody").appendChild(newRow);
        let newCol01 = document.createElement("td");
        newCol01.innerHTML = objectData[i].children[0].children[0].innerHTML
        document.getElementById("row"+i).appendChild(newCol01)
        let newCol02 = document.createElement("td");
        newCol02.innerHTML = objectData[i].children[0].children[0].innerHTML
        document.getElementById("row"+i).appendChild(newCol02);
    }
};