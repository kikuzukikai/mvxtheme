<script src="{{ '/assets/js/back-to-top.js' | relative_url }}" async defer></script>
<script src="{{ '/assets/js/elevator.min.js' | relative_url }}" async defer></script>
<script src="{{ '/assets/js/hamburger-menu.js' | relative_url }}" async defer></script>
<script src="{{ '/assets/js/jquery-3.2.1.slim.min.js' | relative_url }}" async defer></script>
<script src="{{ '/assets/js/popper.min.js' | relative_url }}" async defer></script>
<script src="{{ '/assets/js/bootstrap.min.js' | relative_url }}" async defer></script>
<script>
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  changeFavicon("{{ '/favicon-white.ico' | relative_url }}")
} else {
  changeFavicon("{{ '/favicon.ico' | relative_url }}")
}
</script>
