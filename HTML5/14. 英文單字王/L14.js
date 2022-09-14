var answer;
var answerBtn; // 儲存正確答案的按鈕
var points = 0;
var p = false;

// 預設執行產生題目
question();
$('#next').hide();

$('#next').click(function(){
    answerBtn.removeClass('green');
    answerBtn.addClass('blue');
    $('.red').addClass('blue');
    $('.red').removeClass('red');
    $('#next').hide();
    question();
    p = false;
})

// 點擊下一題按鈕產生題目
$('#a, #b, #c, #d').click(function(){
    if(!p){
        if($(this).text() != answer.zh){
            $(this).removeClass('blue');
            $(this).addClass('red');
            points = 0;
        }
        else{
            points++;
        }
        $('h1').text('連續答對' + points + '題');
        answerBtn.removeClass('blue');
        answerBtn.addClass('green');
        p = true;
        $('#next').show();
    }
})

// 產生題目
function question () {
    var words = [];
    // words[0] = randWord();
    for(var i = 0; i < 4; i++){
        words[i] = randWord();
    }
    $('#a').text(words[0].zh);
    $('#b').text(words[1].zh);
    $('#c').text(words[2].zh);
    $('#d').text(words[3].zh);
    var rand = Math.floor(Math.random() * 4);
    answer = words[rand];
    switch (rand) {
        case 0:
            answerBtn = $('#a');
            break;
        case 1:
            answerBtn = $('#b');
            break;
        case 2:
            answerBtn = $('#c');
            break;
        default:
            answerBtn = $('#d');
    }
    $('h2').text(answer.en);
}

function randWord () {
    var rand = Math.floor(Math.random() * dict.length);
    return dict[rand];
}