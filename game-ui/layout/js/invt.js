var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    // var contentbox = this.nextElementSibling;
    // if (contentbox.style.display === "block") {
    //   contentbox.style.display = "none";
    // } else {
    //   contentbox.style.display = "block";
    // }
  });
}