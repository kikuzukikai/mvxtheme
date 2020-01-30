<script defer>
requestAnimationFrame(function(e) {
  e = document.createElement('link');
  e.rel = 'stylesheet';
  e.href = '{{ "/assets/css/main.css" | relative_url }}';
  document.head.appendChild(e);
});
</script>
<script defer>
requestAnimationFrame(function(e) {
  e = document.createElement('link');
  e.rel = 'stylesheet';
  e.href = '//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
  document.head.appendChild(e);
});
</script>
<script defer>
requestAnimationFrame(function(e) {
  e = document.createElement('link');
  e.rel = 'stylesheet';
  e.href = '//fonts.googleapis.com/css?family=Noto+Sans+JP:300|Noto+Serif+JP:300|Roboto:300|Ubuntu:300&display=swap';
  document.head.appendChild(e);
});
</script>
<script src="{{ '/assets/js/jquery-3.2.1.slim.min.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/elevator.min.js' | relative_url }}" defer></script>
<script defer>
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
<script defer>
var hamburgerMenu=openMenu("hamburger-menu");
function openMenu(id){
  var element = document.getElementById(id);
  return function(){
    with(element.style){
      left = (left === "0px") ? "-284px" : "0px";
    };
  };
};
</script>
<script defer>
window.onload = function(){
  var elevator = new Elevator({
  element: document.querySelector('#back-to-top'), duration: 1000
  });
};
</script>
