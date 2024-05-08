const icon = document.getElementById('moon-icon');

icon.onclick = function() {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')) {
        icon.src = 'resources/images/sun.png'
    } else {
        icon.src = 'resources/images/moon.png'
    }
}