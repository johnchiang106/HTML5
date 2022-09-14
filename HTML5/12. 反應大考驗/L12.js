var status = 'blue';
var id, startTime;
var best = Infinity;
$('body').on("click", function(){
    if(status == 'blue'){
        start();
    }else if(status == 'red'){
        tooSoon();
    }else{
        showResult();
    }
})

function start(){
    $('h1').text('等待綠色');
    $('h2').text('');
    $('body').css("background-color", "red");
    status = 'red';
    var time = Math.random() * 10000;
    id = setTimeout(timeOut, time);
}

function timeOut(){
    $('h1').text('點擊！');
    $('h2').text('');
    $('body').css("background-color", "springgreen");
    status = 'green';
    startTime = Date.now();
}

function tooSoon(){
    $('h1').text('太快了');
    $('h2').text('');
    $('body').css("background-color", "royalblue");
    status = 'blue';
    clearTimeout(id);
}

function showResult(){
    var newScore = Date.now() - startTime;
    $('h1').text(newScore + 'ms');
    $('h2').text('');
    $('body').css("background-color", "royalblue");
    status = 'blue';
    
    if(newScore < best){
        best = newScore;
        $('.best').text('最佳紀錄：' + newScore + 'ms');
    }
}