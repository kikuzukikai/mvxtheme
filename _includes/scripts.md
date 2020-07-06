<script src="/assets/js/jquery-3.2.1.slim.min.js" defer></script>
<script>
     var scrollPosition = getParameterByName('scroll');
     if(scrollPosition)
      $(".doc-menu").scrollTop(scrollPosition);

     $('.doc-link').click(function(){
        var scrollTop = $(".doc-menu").scrollTop();
        if(scrollTop > 0)
          $(this).attr("href",this.href + "?scroll=" + $(".doc-menu").scrollTop());
     });

     function getParameterByName(name, url) {
        if (!url) {
          url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
     }
</script>
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
