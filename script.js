let slider = document.getElementById("myRange");
let num = document.getElementById("demo");
let pageviews = document.getElementById("pageviews");

num.innerHTML = slider.value; 

slider.oninput = function() {
  
  num.innerHTML = this.value;

  switch(this.value) {
    case "8":
      pageviews.innerHTML = "10K";
      break;
    case "12":
      pageviews.innerHTML = "50K";
      break; 
    case "16":
      pageviews.innerHTML = "100K";
      break;
    case "24":
      pageviews.innerHTML = "500K";
      break;
    case "36":
      pageviews.innerHTML = "1M";
      break;    
  }
  
}
