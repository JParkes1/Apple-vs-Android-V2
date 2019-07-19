// Andriod vs Apple

// Event Listeners
document.getElementById('andriodBtn').addEventListener('click', andriodStyle);
document.getElementById('appleBtn').addEventListener('click', appleStyle);

//Event functions
function andriodStyle () {
    document.getElementById('img1').src = 'images/android-Logo.jpg';
    document.getElementById('siteLink').innerHTML = 'Andriod Home';
    document.getElementById('siteLink').style.backgroundColor = '#a4c93b';
    document.getElementById('siteLink').href = 'https://www.android.com/';
    document.body.style.backgroundColor = '#a4c93b';
}

function appleStyle () {
    document.getElementById('img1').src = 'images/Apple-Logo.jpg';
    document.getElementById('siteLink').innerHTML = 'Apple Home';
    document.getElementById('siteLink').style.backgroundColor = '#b6bcca';
    document.getElementById('siteLink').href = 'https://www.apple.com/';
    document.body.style.backgroundColor = '#b6bcca';
}