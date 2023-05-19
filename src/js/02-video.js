import throttle from "lodash.throttle";
import vimeoPlayer from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);

    

    const updateTime = time => {localStorage.setItem("videoplayer-current-time", time.seconds);}
    
    player.on('timeupdate', throttle(updateTime, 1000));

    const playedTime = JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0;
        player.setCurrentTime(playedTime)


    