"use strict";
//Written by :  TAYYABA RAO
// Date : 18/feb/2024
//Roll no : 00388416
// define the function make_album
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        tittle: title,
    };
    //if tracks parameter is provided, add it to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album('Artist 1', 'Album Title 1');
console.log(album1);
const album2 = make_album('Artist 2', 'Album Title 2');
console.log(album2);
const album3 = make_album('Artist 3', 'Album Tittle 3');
console.log(album3);
