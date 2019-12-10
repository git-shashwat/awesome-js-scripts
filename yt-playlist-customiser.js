(function(){
    const $playlistItems = document.querySelectorAll('#playlist-items');

    // color-coding already checked playlist of the session
    let markedVideos = [];
    const myStorage = JSON.parse(localStorage.getItem('markedvideo'));

    if (myStorage !== null) {
        markedVideos = JSON.parse(localStorage.getItem('markedvideo')).index;
    };

    // creating checkboxes
    for (let i = 0; i < $playlistItems.length-1; ++i) {
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('value', i+1);
        $playlistItems[i].appendChild(checkbox);
    }

    if(markedVideos.length) {
        markedVideos.forEach(index => {
            $playlistItems[index].querySelector('input').setAttribute('checked', true);
            $playlistItems[index].style.backgroundColor = "#6ECF5E";
        });
    }

    // adding click event
    for (let i = 0; i < $playlistItems.length-1; ++i) {
        const $chkBtn = $playlistItems[i].querySelector('input');
        $chkBtn.addEventListener('click', function(e) {
            if($chkBtn.checked) {
                $chkBtn.parentElement.style.backgroundColor = "#6ECF5E";
                markedVideos.push(i);
            } else {
                $chkBtn.parentElement.style.background = "none";
                const markIndex = markedVideos.findIndex(index => index === i);
                markedVideos.splice(markIndex,1);
            }
            localStorage.setItem('markedvideo', JSON.stringify({ index: markedVideos }));
        })
    }
})();
