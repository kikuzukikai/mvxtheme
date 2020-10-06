<script>
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

<script>
{% include js/elevator.min.js %}
</script>
<script>
window.onload = function(){
  var elevator = new Elevator({
  element: document.querySelector('#back-to-top'), duration: 1000
  });
};
</script>

<script src="lunr.min.js"></script> <!-- lunr.js library -->
<script src="lunr.stemmer.support.js"></script>
<script src="lunr.ja.js"></script> <!-- or any other language you want -->