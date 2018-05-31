require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");
var keys = require("./keys");


var spotify = new Spotify(keys.spotify);
var twitter = new Twitter(keys.twitter);

var userInput = process.argv[2];

// #10
function myTweets () {
    // console.log("TWITTER KEY:" + twitter.consumer_key);
    var params = {screen_name: 'joanne_pizza',count:20};
    twitter.get('statuses/user_timeline', params, function(error, tweets, response) {       
        if (!error) {
            // console.log("NO ERROR HERE");
            for(var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);    
            } 
        }
    });
 
}

function spotifyThisSong (argv) {
    // console.log("SPOTIFY:" + spotify.id);
    if (argv === undefined) {
        argv = "Skinny Love";
    }

    //put in other information into console.log
    spotify.search({ type: 'track', query: argv, limit:1 }, function(err, data) {
        // console.log(argv);
        // console.log(data);
        if (err) {
          return console.log('Error occurred: ' + err);
        }
 
        console.log("Artist: " + JSON.stringify(data.tracks.items[0].name)+ "\nSong Name: " + JSON.stringify(data.tracks.items[0].name)
        +"\nPreview Link: " + JSON.stringify(data.tracks.items[0].preview_url)+"\nAlbum: " + JSON.stringify(data.tracks.items[0].album.name)); 
    });
 
}

//put in other information into console.log
function movieThis (movie) {
    if (movie === undefined) {
        movie = "Mr. Nobody";
    }

    var movieURL = "http://www.omdbapi.com/?t="+ movie +"&apikey=trilogy";
    request(movieURL, function (error, response, body) {
        var parseBody = JSON.parse(body);
        // console.log("ENTIRE MOVIE OBJECT: " + JSON.stringify(parseBody));
        console.log("Title of Movie: " + parseBody.Title + "\nYear Released: " + parseBody.Released + "\nIMBD Rating: " + parseBody.imdbRating
        + "\nRotten Tomatoes Rating: " + parseBody.Ratings[1].Value+ "\nCountry Produced: " + parseBody.Country + "\nLanguage: " + parseBody.Language
        + "\nPlot: " + parseBody.Plot + "\nActors: " + parseBody.Actors);
    });
};


function doWhatItSays () {
    
    fs.readFile("random.txt","utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }  

        // console.log(data);
        var dataArr = data.split(",");
        // console.log(dataArr);       
        
        spotifyThisSong(dataArr[1]);
    });
}


    

// SWITCH STATEMENT
switch(userInput){
    case 'my-tweets':
    myTweets();
    break;
    case 'spotify-this-song':
    spotifyThisSong(process.argv[3]);
    break;
    case 'movie-this':
    movieThis(process.argv[3]);
    break;
    case 'do-what-it-says':
    doWhatItSays();
    break;
} 
