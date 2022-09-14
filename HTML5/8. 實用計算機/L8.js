$('#img-shake').hide();
$('button').click(getChar);
var screen_text = '';

function getChar(){
    var ch = $(this).text();
    if(ch == 'C'){
        screen_text = '';
    }else if(ch == 'del'){
        screen_text = screen_text.slic
        e(0,screen_text.length-1);
    }else if(ch == '='){
        try {
            screen_text = eval(screen_text);
        } catch (e) {screen_text = 'Error'}
    }else{
        screen_text += $(this).text();
    }
    $('p').text(screen_text);
}