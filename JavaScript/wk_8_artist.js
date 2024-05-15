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
        var artistName = artist.name
        link.innerHTML = `<br>${artistName}</br>`;
        link.href = `javascript:fetchAlbums('${artist.id}', '${artistName}')`;
        document.getElementById("results").appendChild(link);
    });
}

function fetchAlbums(artistID, artistName) {
    const baseURL = "https://musicbrainz.org/ws/2/release/?artist=";
    const format = "&fmt=json";
    const albumsURL = baseURL + artistID + format;

    fetch(albumsURL)
        .then(response => response.json())
        .then(data => {
            albumResults(data.releases, artistName);
        })
        .catch(error => {
            console.error("Error retrieving albums:", error);
        });

}

function albumResults(albums, artistName) {
    const albumResultsDiv = document.getElementById("albumResults");
    albumResultsDiv.innerHTML = "";

    if (albums.length === 0) {
        albumResultsDiv.textContent = 'No albums found for this artist';
        return;
    }

    const Title = document.getElementById("tableTitle");
        Title.innerHTML = artistName;
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