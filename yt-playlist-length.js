(function(){
    setTimeout(()=> {
        const $timeSpanElements = document.querySelectorAll('ytd-playlist-panel-video-renderer > .style-scope ytd-thumbnail-overlay-time-status-renderer');
        let total = 0;
        for (let i = 0; i < $timeSpanElements.length-1; ++i) {
            const time = $timeSpanElements[i].textContent.split(':');
            const minutes = time[0], seconds = time[1];
            total += minutes/60 + seconds/3600;
        }
        total = Math.round(total);
        alert(`Length of this playlist is ${total} hours.`);
    },5000);
})();