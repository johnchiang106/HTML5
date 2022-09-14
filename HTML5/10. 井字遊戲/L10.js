var now = '〇';
var end = false;
var p = [];

$('.grid div').click(place);
$('button').click(restart);

function restart(){
    $('h1').text('Tic Tac Toe');
    $('.grid div').removeClass('orange');
    $('.grid div').removeClass('red');
    $('.grid div').addClass('gray');
    $('.grid div').text('');
    end = false;
}

function place(){
    if($(this).text() !== '〇' && $(this).text() !== 'X' && !end){
        $(this).text(now);
        $(this).removeClass('gray');
        if(now=='〇'){
            now = 'X';
            $(this).addClass('orange');
        }else{
            now = '〇';
            $(this).addClass('red');
        }
        p[0] = $('#a').text();
        p[1] = $('#b').text();
        p[2] = $('#c').text();
        p[3] = $('#d').text();
        p[4] = $('#e').text();
        p[5] = $('#f').text();
        p[6] = $('#g').text();
        p[7] = $('#h').text();
        p[8] = $('#i').text();
        
        check(p[0],p[1],p[2]);
        check(p[3],p[4],p[5]);
        check(p[6],p[7],p[8]);
        check(p[0],p[3],p[6]);
        check(p[1],p[4],p[7]);
        check(p[2],p[5],p[8]);
        check(p[0],p[4],p[8]);
        check(p[2],p[4],p[6]);
    }
}

function check(x, y, z){
    if(x == y && x == z && x !== ''){
        $('h1').text(x + '獲勝!');
        end = true;
    }
}