'usestrict';
function addSongs() {
    let song1 = document.getElementById('song1'); // <li></li>
    let song2 = document.getElementById('song2'); // <li></li>
    let song3 = document.getElementById('song3'); // <li></li>

    song1.innerHTML = 'Blue Suede Strings, by Elvis Pagely';
    song2.innerHTML = 'Great Objects on Fire, by Jerry JSON Lewis';
    song3.innerHTML = 'I Code the Line, by Johnny JavaScript';
}

window.onload = addSongs;
/*
<li>Blue Suede Strings, by Elvis Pagely</li>
<li>Great Objects on Fire, by Jerry JSON Lewis</li>
<li>I Code the Line, by Johnny JavaScript</li>
*/
