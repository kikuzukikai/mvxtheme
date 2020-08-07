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

<script>
function onSubmit(e) {
  var url = $("#contact").attr('action');
  ajaxSendData(url, $("#contact").serialize());
}
</script>
