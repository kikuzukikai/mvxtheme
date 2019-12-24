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
