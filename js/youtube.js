// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    // <div id="player"></div>
    new YT.Player('player', {
        // height: '360',
        // width: '640',
        videoId: 'An6LvWQuj_8', //최초 재생한 유튜브 영상 ID
        playerVars: {
            autoplay : true, //자동 재생 유무
            loop: true, //반복 재생 유무
            playlist: 'An6LvWQuj_8'
        },
        events: {
            onReady: function(e){
                e.target.mute() //음소거
            }
        }
    });
}