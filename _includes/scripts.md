{% include google-analytics.md %}
<script type="text/javascript" src="//typesquare.com/3/tsst/script/ja/typesquare.js?5ccd4bc22e0841d784d862ecac1e02ec" charset="utf-8" async defer></script>
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
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.6.1/firebase-app.js" async defer></script>
<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.6.1/firebase-analytics.js" async defer></script>
<!-- Initialize Firebase -->
<script src="/__/firebase/init.js" async defer></script>
