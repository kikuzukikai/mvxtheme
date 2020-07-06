<script src="{{ '/assets/js/elevator.min.js' | relative_url }}" defer></script>
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
<script>
function validateRecaptcha ( code ) {
  if ( !!code ) {
    var form = document.querySelector(".recaptcha");
    form.removeAttribute('disabled');
  }
}
</script>
