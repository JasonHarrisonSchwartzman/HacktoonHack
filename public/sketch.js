
 const data = [

        {"picture":"https://edtimes.in/wp-content/uploads/2017/11/mZnKY.jpg", "name":"Archie", "country":"America", "year": 1939, "maincharacter":"Archie"},
        {"picture":"https://qph.fs.quoracdn.net/main-qimg-1b9a87223e4008a3baa2950af5c0dea3", "name":"Garfield", "country":"America", "year": 1978, "maincharacter":"Garfield", "author":"Jim Davis"},
        {"picture":"https://bleedingcool.com/wp-content/uploads/2018/04/SM840722_Sunday-1200x675.jpg","name":"The Amazing Spiderman", "country":"America", "year": 1977, "maincharacter":"Spiderman", "author":"Stan Lee"}
 ]

function getRandomComic() {
    const random = Math.floor(Math.random() * data.length)
    const randomObject = data[random];
    return randomObject;
}
var test = getRandomComic()
/* {
-Wallace the Brave
-Peanuts
-Garfield
-Blonde
-Popeye
-Beetle Bailey
}
*/