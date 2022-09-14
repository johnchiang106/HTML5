var ls = 'Level: '
var l = 0;
var timer = 0;
var correct = true;

$('#btn-yes').click(function(){
    correct ? start() : gameOver();
})

$('#btn-no').click(function(){
    !correct ? start() : gameOver();
})

start();
function start () {
    // 讓網頁跳出文字訊息：
    l++;
    $('#level').text(ls + l);
    
    var a = Math.floor(Math.random() * 10);
    var b = Math.floor(Math.random() * 10);
    var ans = a + b;
    correct = Math.random() > 0.5;
    if(!correct){
        var temp = Math.ceil(Math.random() * 3);
        ans += Math.random() > 0.5 ? temp : -temp;
        console.log(temp);
    }
    $('#formula').text(a + ' + ' + b + ' = ' + ans);
    timer = 0;
}
// 創造一個函式指令 hello：
function gameOver () {
    $('button').hide();
    $('#gameover').show();
    clearInterval(t);
}
//gameOver();
var t = setInterval(function(){
    timer += 0.5;
    if(timer >= 100){
        gameOver();
    }
    $('#bar').css('width', timer + '%');
})