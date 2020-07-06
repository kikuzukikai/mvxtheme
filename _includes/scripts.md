<script src="/assets/js/jquery-3.2.1.slim.min.js" defer></script>

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

<script src="/assets/js/anchor.min.js"></script>
<script>anchors.add('h1, h2, h3, h4, h5, h6');</script>

<script src="/assets/js/elevator.min.js" defer></script>
<script>
window.onload = function(){
  var elevator = new Elevator({
  element: document.querySelector('#back-to-top'), duration: 1000
  });
};
</script>

<script>
function connecttext( textid, ischecked ) {
  document.getElementById(textid).disabled = !ischecked;
}
</script>
