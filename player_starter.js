// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'nKIu9yen5nc',
      events: {
        'onReady': onPlayerReady
      }
  });
}

// function player.loadVideoById

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
//   event.target.playVideo();
}
function play() {
player.playVideo();
}

function load(video_Id){
player.loadVideoById(video_Id);
}

function bamVid(playlist_id){
player.loadPlaylist(playlist_id)
}
player.loadPlaylist({ listType:'playlist',
                      list:'PLDOxZhBoTB2wpPFKejTqPFas039v7O-R8'
})

// function next('9NWWiIxA8mE&list=PLDOxZhBoTB2wpPFKejTqPFas039v7O-R8',+=0, 0 )
// player.loadPlaylist()
//
