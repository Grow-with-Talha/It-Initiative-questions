const make_album = (artistName: string, albumTitle: string, numOfTracks?: number) => {
    if(numOfTracks){
        return {
            artistName: artistName,
            albumTitle: albumTitle,
            numOfTracks: numOfTracks,
        }
    }
    return {
        artistName: artistName,
        albumTitle: albumTitle,
    }
}

console.log(make_album("shadows in the echo", "eclipse of reason"))
console.log(make_album("whispers of tomorrow", "voyagers in silence"))
console.log(make_album("Beneath the silent skies", "Auroras veils", 75))