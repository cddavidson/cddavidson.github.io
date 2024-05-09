function searchArtist() {
    const artistName = document.getElementById("artistName").value.trim();
    if (artistName === "") {
        alert("Please enter the name of a musical artist.");
        return;
        }

    const baseURL = "https://musicbrainz.org/ws/2/artist/?query=";
    const format = "&fmt=json";
    const artistURL = baseURL + encodeURIComponent(artistName) + format;

    fetch(artistURL)
        .then(response => response.json())
        .then(data => {
            let artists = data.artists
            displayResults(artists);
    })
}


function displayResults(artists) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (artists.length === 0) {
        resultsDiv.textContent = "No artists found with this name. <br>Please try another artist.</br>"
        return;
    }

    artists.forEach(artist => {
        const link = document.createElement("a");
        link.innerHTML = `<br>${artist.name}</br>`;
        link.href = `javascript:fetchAlbums('${artist.id}')`;
        document.getElementById("results").appendChild(link);
    });
}

function fetchAlbums(artistID) {
    const baseURL = "https://musicbrainz.org/ws/2/release/?artist=";
    const format = "&fmt=json";
    const albumsURL = baseURL + artistID + format;

    fetch(albumsURL)
        .then(response => response.json())
        .then(data => {
            albumResults(data.releases);
        })
        .catch(error => {
            console.error("Error retrieving albums:", error);
        });

}

function albumResults(albums) {
    const albumResultsDiv = document.getElementById("albumResults");
    albumResultsDiv.innerHTML = "";

    //const Bandname = document.getElementById("tableTitle");
        //Bandname.innerHTML = `<br>${artist.name}</br>`;
        //document.getElementById("tableTitle").appendChild(Bandname);

    if (albums.length === 0) {
        albumResultsDiv.textContent = 'No albums found for this artist';
        return;
    }

    const table = document.createElement("table");
    const hr = document.createElement("tr");
    const h1 = document.createElement('th');
        h1.textContent = "Release Date";
    const h2 = document.createElement("th");
        h2.textContent = "Album Name";
    hr.appendChild(h1);
    hr.appendChild(h2);
    table.appendChild(hr);

    albums.forEach(album => {
        const row = document.createElement("tr");
        const date = document.createElement("td");
            date.textContent = album.date;
        const title = document.createElement("td");
            title.textContent = album.title;
        row.appendChild(date);
        row.appendChild(title);
        table.appendChild(row);
    });

    albumResultsDiv.appendChild(table);
}