import throttle from "lodash.throttle";
import vimeoPlayer from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);

    // player.on('play', function() {
    //     console.log('played the video!');
    // });

    const updateTime = seconds =>
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
    
    player.on('timeupdate', throttle(updateTime, 1000));

    const playedTime = localStorage.getItem("videoplayer-current-time")
    const currentTime = JSON.parse(playedTime);

    if (currentTime.seconds)
        {player.setCurrentTime(currentTime.seconds)}


    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });
    