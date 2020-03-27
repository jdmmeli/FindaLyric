function clearSearch() {
  $("#lyricSearch").val("");
   $("#artistSearch").val("");
  $("#lyrics").html("");
  $(".twitter").html("");
}


function empty() {
  
  $("#lyrics").html("");
  $(".twitter").html("");
  
}
// function getArtistid(){

//      var artistSearch = document.getElementById("artistSearch").value;
//      var songSearch = document.getElementById("lyricSearch").value;
//      console.log(songSearch);

//      $.ajax({
//          type: "GET",
//          data: {
//              apikey:"1f3c721c7b3430d9d7191c41b292822c",
//              q_artist: artistSearch,
//              q_track: songSearch,
//              format:"jsonp",
//              callback:"jsonp_callback",

//          },
//          url: "https:api.musixmatch.com/ws/1.1/matcher.lyrics.get",
//          dataType: "jsonp",
//          jsonpCallback: 'jsonp_callback',
//          contentType: 'application/json',
//          success: function(data) {
//               console.log(data);
//              var performer_Id=  data.message.body.artist_list[0].artist.artist_id ;
//              gettwitter(performer_Id);
//             },
//          error: function(jqXHR, textStatus, errorThrown) {
//              console.log(jqXHR);
//              console.log(textStatus);
//              console.log(errorThrown);
//          }
//  });
// }





function gettwitter() {
  
  var artistSearch = document.getElementById("artistSearch").value;
  // console.log(performer_Id);

  $.ajax({
    type: "GET",
    data: {
      apikey: "1f3c721c7b3430d9d7191c41b292822c",
      q_artist: artistSearch,
      format: "jsonp",
      callback: "jsonp_callback",

    },
    url: "https://api.musixmatch.com/ws/1.1/artist.search",
    dataType: "jsonp",
    jsonpCallback: 'jsonp_callback',
    contentType: 'application/json',
    success: function (data) {
      console.log(data);
      var artist_twitter = data.message.body.artist_list[0].artist.artist_twitter_url;
      console.log(artist_twitter);

      var a = document.querySelector('.twitter-timeline');
      if (a) {
        a.setAttribute('href', artist_twitter)
      }

      displaysTwitter(document, "script", "twitter-wjs");
      //    $(document).ready(function(){
      //  $('a[href^="http://"]').each(function(){ 
      //    var oldUrl = $(this).attr("href"); // Get current url
      //    var newUrl = oldUrl.replace("https://twitter.com",artist_twitter ); // Create new url
      //  $(this).attr("href", newUrl); // Set herf value
      //  });
      // });



    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    }
  });
}

function displaysTwitter(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + "://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
}

// !function (d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
//   if (!d.getElementById(id)) {
//     js = d.createElement(s);
//     js.id = id;
//     js.src = p + "://platform.twitter.com/widgets.js";
//     fjs.parentNode.insertBefore(js, fjs);
//   }
// }(document, "script", "twitter-wjs");



function getSongLyrics() {
  //  empty() ;
  var artist = document.getElementById("artistSearch").value;
  var song = document.getElementById("lyricSearch").value;

  var apikey =
    "?apikey=HOaeWFw9AtiKvo2R3Ic98EFG1j6n4oobnVJDV2Q4K1pjWQKoV1lacK3KKvdYDi2J";
  var queryURL = `https://orion.apiseeds.com/api/music/lyric/${artist}/${song}${apikey}`;
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var lyricsBody = response.result.track.text;
    var lyric = document.createElement("p");
    lyric.classList.add("center-align");
    lyricsBody = lyricsBody
      .replace(/\r\n/g, "<br />")
      .replace(/[\r\n]/g, "<br />");
    lyric.innerHTML = lyricsBody;
    console.log(response);
    document.getElementById("lyrics").appendChild(lyric);
  });
  getArtistImage()
}





function getArtistImage() {
  var artist = document.getElementById("artistSearch").value;
  var apikey = "&apikey=0d990fVFAdY2XfKF2BvVRyUSgdJMCbReK6xWurMLBxsjSsVF2h06ADB0";
  var queryURL = `https://api.happi.dev/v1/music?q=${artist}${apikey}`;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    // var artistImage = repsonse.result[0].cover;
    // var image = document.createElement("img");
    // image.innerHTML = artistImage;
    // document.getElementById("artistPic").prepend(lyric);





  });

}

