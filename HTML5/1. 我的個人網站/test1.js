$(document).ready(function(){
    var d = false;
    // var b = document.getElementById('b1');
    // var h = document.getElementsByClassName('hid');
    // b.addEventListener('click', function(){
    //     if(!d){
    //         h.fadeIn();
    //         //$(".hid").fadeIn();
    //         d = true;
    //     }else{
    //         // $(".hid").fadeOut();
    //         $(h).fadeOut();
    //         d = false;
    //     }
    //     h.slideToggle("slow");
    //     // $(".hid").slideToggle("slow");
    // })
    $('#b1').click(function(){
    if(!d){
        $(".hid").fadeIn();
        d = true;
    }else{
        $(".hid").fadeOut();
        d = false;
    }
    $(".hid").slideToggle("slow");
});
})



// $('#b1').click(function(){
//     if(!d){
//         $(".hid").fadeIn();
//         d = true;
//     }else{
//         $(".hid").fadeOut();
//         d = false;
//     }
//     $(".hid").slideToggle("slow");
// });
