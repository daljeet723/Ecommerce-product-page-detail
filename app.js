let showImage = document.getElementsByClassName("small-image");

const showImageStyle = document.querySelectorAll(".small-image");
const showFullImageStyle = document.getElementsByClassName("large-image")[0];


// for(let i=0; i<showImage.length;i++){
//   showImage[i].addEventListener('click',()=>{
//
//     var imgSource = showImage[i].getAttribute("src");
//     // get image source for selected thumbnail from start 7 and length 15
//
//     var extractSource = imgSource.substr(7,15);
//     showFullImage.src="images/"+extractSource+".jpg";
//
//   });
//
// }



showImageStyle.forEach((link)=> {
    link.addEventListener("click", function(){

        showImageStyle.forEach((e)=> {
        e.style.removeProperty("opacity");
        e.style.removeProperty("border");
        e.style.removeProperty("padding");
      })

      this.style.opacity="50%";
      this.style.border ="3px solid hsl(26, 100%, 55%)";
      this.style.padding="0px";

      var imgSource = link.getAttribute("src");
      // get image source for selected thumbnail from start 7 and length 15
      var extractSource = imgSource.substr(7,15);
      showFullImageStyle.src="images/"+extractSource+".jpg";

    })
})




var currentQty = document.getElementsByClassName("addQty")[0].innerHTML;
var minusQty = document.getElementsByClassName("btnMinus")[0];
var plusQty = document.getElementsByClassName("btnPlus")[0];
var qty=currentQty;

//Reduce qty
minusQty.addEventListener("click",()=>{
  if(qty > 0){
    qty--;
  document.getElementsByClassName("addQty")[0].innerHTML=qty;
  }
});

//add quantity
plusQty.addEventListener("click",()=>{
    qty++;
    document.getElementsByClassName("addQty")[0].innerHTML=qty;
});


//Display cart
var showCart = document.getElementsByClassName("cart")[0];
showCart.addEventListener("click",()=>{
view();
})

//display cart on first click and hide on second click
  function view() {
  var cartVisible=document.getElementsByClassName('cart-container')[0].style.visibility;
    if(cartVisible=='hidden' || cartVisible == ''){
          document.getElementsByClassName('cart-container')[0].style.visibility="visible";
    } else{
          document.getElementsByClassName('cart-container')[0].style.visibility = 'hidden';
    }
  }
