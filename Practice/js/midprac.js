

// $(document).ready(function(){
//     $("#pappy").click(function(){
//         $("#imgPappy").show();
//         $("#imgKitty").hide();
//     });

//     $("#kitty").click(function(){
//         $("#imgKitty").show();
//         $("#imgPappy").hide();
//     });
// });


// const pappy = document.querySelector("#pappy");
// const kitty = document.querySelector("#kitty");
// const imgPappy = document.querySelector("#imgPappy");
// const imgKitty = document.querySelector("#imgKitty");

// pappy.addEventListener("click", function(){
//     imgPappy.style.display = "none";
//     imgKitty.style.display = "block";
// });

// kitty.addEventListener("click", function(){
//     imgKitty.style.display = "none";
//     imgPappy.style.display = "block";
// });



const pappy = document.getElementById("pappy");
const kitty = document.getElementById("kitty");
const imgPappy = document.getElementById("imgPappy");
const imgKitty = document.getElementById("imgKitty");

pappy.addEventListener("click", function(){
    imgPappy.style.display = "none";
    imgKitty.style.display = "block";
});

kitty.addEventListener("click", function(){
    imgKitty.style.display = "none";
    imgPappy.style.display = "block";
});



