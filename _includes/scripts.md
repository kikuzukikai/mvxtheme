<script src="https://identity.netlify.com/v1/netlify-identity-widget.js" defer></script>

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
var today = new Date();
var year = today.getFullYear();
var yearStr = year;
var monthStr = 11;
var dayStr = 3;
var jsMonth = monthStr - 1 ;
var date = new Date(yearStr, jsMonth , dayStr);
var dDay = date.getDate();
window.onload = function onLoad() {
  target = document.getElementById("output");
         if (dDay == 0) {
    target.innerHTML(year + "年の慰霊祭は11月<strong>3日</strong>の午前11時より斎行します。");
  } else if (dDay == 1) {
    target.innerHTML(year + "年の慰霊祭は11月<strong>3日</strong>の午前11時より斎行します。");
  } else if (dDay == 2) {
    target.innerHTML(year + "年の慰霊祭は11月<strong>1日</strong>の午前11時より斎行します。");
  } else if (dDay == 3) {
    target.innerHTML(year + "年の慰霊祭は11月<strong>7日</strong>の午前11時より斎行します。");
  } else if (dDay == 4) {
    target.innerHTML(year + "年の慰霊祭は11月<strong>6日</strong>の午前11時より斎行します。");
  } else if (dDay == 5) {
    target.innerHTML(year + "年の慰霊祭は11月<strong>3日</strong>の午前11時より斎行します。");
  } else if (dDay == 6) {
    target.innerHTML(year + "年の慰霊祭は11月<strong>3日</strong>の午前11時より斎行します。");
  } else {
    target.innerHTML("An error has occurred!");
  }
}
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
