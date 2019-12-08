(function(){
    const $playlistItems = document.querySelectorAll('#playlist-items');
    for (let i = 0; i < $playlistItems.length-1; ++i) {
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('value', i+1);
        $playlistItems[i].appendChild(checkbox);
    }
    for (let i = 0; i < $playlistItems.length-1; ++i) {
        const $chkBtn = $playlistItems[i].querySelector('input');
        $chkBtn.addEventListener('click', function(e) {
            if($chkBtn.checked) {
                $chkBtn.parentElement.style.backgroundColor = "#6ECF5E";
            } else {
                $chkBtn.parentElement.style.background = "none";
            }
        })
    }
})();