var cards = $('.card');
var count = 1;
var startTime = Date.now();
// console.log($(cards[13]).text());
$('.card').click(function(){
    var num = Number($(this).text());
    if(count == num){
        if(count < 26){
            $(this).text(num+25);
        }
        else if(count < 50){
            $(this).css('visibility', 'hidden');
        }
        else{
            $('.card').css('visibility', 'visible');
            $('.card').css('background-color', 'gold');
            $('.card').text('');
            $(cards[11]).text('結果：');
            $(cards[12]).text((Date.now() - startTime)/1000);
            $(cards[13]).text('秒');
        }
        count++;
    }
})

for(var i = 0; i < 30; i++){
    var r1 = Math.floor(Math.random() * 25);
    var r2 = Math.floor(Math.random() * 25);
    var r3 = Math.floor(Math.random() * 25);
    
    var temp = $(cards[r1]).text();
    $(cards[r1]).text($(cards[r2]).text());
    $(cards[r2]).text($(cards[r3]).text());
    $(cards[r3]).text(temp);
}