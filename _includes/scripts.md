<script src="{{ '/assets/js/back-to-top.js' | relative_url }}" async defer></script>
<script src="{{ '/assets/js/elevator.min.js' | relative_url }}" async defer></script>
<script src="{{ '/assets/js/hamburger-menu.js' | relative_url }}" async defer></script>
<script src="{{ '/assets/js/jquery-3.2.1.slim.min.js' | relative_url }}" async defer></script>
<script src="{{ '/assets/js/popper.min.js' | relative_url }}" async defer></script>
<script src="{{ '/assets/js/bootstrap.min.js' | relative_url }}" async defer></script>
<script>
const changeFavicon = link => {
  let $favicon = document.querySelector('link[rel="icon"]');
  if ($favicon !== null) {
    $favicon.href = link;
  } else {
    $favicon = document.createElement("link");
    $favicon.rel = "icon";
    $favicon.href = link;
    document.head.appendChild($favicon);
  }
};
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  changeFavicon("{{ site.url }}/favicon-white.ico");
} else {
  changeFavicon("{{ site.url }}/favicon.ico");
};
</script>
<script>
requestAnimationFrame(function(e) {
  e = document.createElement('link');
  e.rel = 'stylesheet';
  e.href = '{{ '/assets/css/main.css' | relative_url }}';
  document.head.appendChild(e);
});
</script>
<script>
requestAnimationFrame(function(e) {
  e = document.createElement('link');
  e.rel = 'stylesheet';
  e.href = '//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
  document.head.appendChild(e);
});
</script>
<script>
requestAnimationFrame(function(e) {
  e = document.createElement('link');
  e.rel = 'stylesheet';
  e.href = '//fonts.googleapis.com/css?family=Noto+Serif+JP:300|Noto+Sans+JP:300|Roboto:300|Ubuntu:300&display=swap';
  document.head.appendChild(e);
});
</script>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.6.1/firebase-app.js"></script>
<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.6.1/firebase-analytics.js"></script>
<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
