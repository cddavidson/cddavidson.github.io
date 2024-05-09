function fetchAlbums(artistID) {
    const baseURL = "https://musicbrainz.org/ws/w/artist/?query=";
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