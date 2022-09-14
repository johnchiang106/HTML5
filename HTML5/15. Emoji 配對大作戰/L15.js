// 選擇相對emoji放入陣列
var answers = [
    '🧣', '🎩', '🧢', '👒', '🎓', '⛑', '👑', '👝',
    '🧣', '🎩', '🧢', '👒', '🎓', '⛑', '👑', '👝'
];
var first;

var firstEl;
var secondEl;

var t = 0;

var lock = false;

for(var i = 0; i < 20; i++){
    var r1 = Math.floor(Math.random() * 16);
    var r2 = Math.floor(Math.random() * 16);
    var temp = answers[r1];
    answers[r1] = answers[r2];
    answers[r2] = temp;
}


$('button').click(function () {
    if(!lock && $(this).text() == '❓'){
        if(first === undefined){
            first = answers[$(this).data('index')];
            $(this).text(first);
            firstEl = $(this);
            //firstDataIndex = $(this).data('index');
        }
        //else if(firstDataIndex != $(this).data('index')){
        else{
            // console.log(firstEl);
            second = answers[$(this).data('index')];
            $(this).text(second);
            secondEl = $(this);
            
            if(first != second){
                lock = true;
                setTimeout(function() {
                    firstEl.text('❓');
                    secondEl.text('❓');
                    lock = false;
                }, 1000);
            }
            first = undefined;
            t++;
            $('h1').text('翻開' + t + '次');
        }
    }
    
});