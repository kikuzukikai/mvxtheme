<script defer>
requestAnimationFrame(function(e) {
  e = document.createElement('link');
  e.rel = 'stylesheet';
  e.href = '//fonts.googleapis.com/css?family=Noto+Sans+JP:300|Noto+Serif+JP:300|Roboto:300|Ubuntu:300&display=swap';
  document.head.appendChild(e);
});
</script>
<script defer>
requestAnimationFrame(function(e) {
  e = document.createElement('link');
  e.rel = 'stylesheet';
  e.href = '//use.fontawesome.com/releases/v5.12.0/css/all.css';
  document.head.appendChild(e);
});
</script>
<script src="{{ '/assets/js/jquery-3.2.1.slim.min.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/elevator.min.js' | relative_url }}" defer></script>
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
<script defer>
  var fullYear = document.createElement('p');
  fullYear.className = 'copyright';
  fullYear.textContent = '&copy;&nbsp;' + new Date().getFullYear() + '&nbsp;<a href="{{ site.url }}">{{ site.title }}</a>';
  document.body.appendChild(fullYear);
</script>
