// Create Element Without Shown in Page

var video = document.createElement('video');
video.src = 'urlToVideo.ogg';
video.autoplay = true;

// Create Button in Page
// <button onclick="myFunction()">Try it</button>
// <script>
function myFunction() {
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);
}
// </script>

