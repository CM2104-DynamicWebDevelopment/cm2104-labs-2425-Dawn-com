var express = require('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node');
 app.use(express.static('public'))
 app.get('/searchLove', function (req, res) {
    getTracks('love', res);
});
var spotifyApi = new SpotifyWebApi({
    clientId: 'eeaf6cda434245e7bb2b2d4bc3c5dffb',
    clientSecret: 'a34b724f4088488191c600ff693bd17d'
});
spotifyApi.clientCredentialsGrant().then(
function (data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
    },
    function (err) {
    console.log(
    'Something went wrong when retrieving an access token',
    err.message
    );
    }
);
async function getTracks(searchterm, res) {
    spotifyApi.searchTracks(searchterm)
    .then(function (data) {
        spotifyApi.searchTracks(searchterm)
        .then(function (data) {
        var tracks = data.body.tracks.items
        //lets set up a empty string to act as the response
        var HTMLResponse = "";
        //now lets run through all the items
        //this is a for loop
        for(var i=0; i<tracks.length;i++){
       
        var track = tracks[i];
        //console.log(track.name);
        HTMLResponse = HTMLResponse +
        "<div>" +
        "<h2>"+track.name+"</h2>"+
        "<h4>"+track.artists[0].name+"</h4>"+
        "<img src='"+track.album.images[0].url +"'>"+
        "<a href='"+track.external_urls.spotify+"'> Track Details </a>"+
        "</div>";
        //console.log(HTMLResponse);
        }
        res.send(HTMLResponse)
        }, function (err) {
        console.error(err);
       });
        res.send(JSON.stringify(data.body));
        }, function (err) {
        console.error(err);
    });
}
app.listen(8080);