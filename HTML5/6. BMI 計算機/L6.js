$('#img-fat').hide();
$('#img-slim').hide();
$('#img-normal').hide();
$('#btn-start').on('click',getResult);

function getResult(){
    var h = parseFloat($('#input1').val());
    var w = parseFloat($('#input2').val());
    
    var bmi = w/h/h*10000;
    bmi = bmi.toFixed(2);
    
    $('#img-guess').hide();
    var text;
    if(bmi<=18.5){
        text = ' 太輕了! ';
        $('#img-slim').show();
        $('#img-fat').hide();
        $('#img-normal').hide();
    }else if(bmi>24.9){
        text = ' 過胖哦! ';
        $('#img-fat').show();
        $('#img-slim').hide();
        $('#img-normal').hide();
    }else{
        text = ' 正常! ';
        $('#img-normal').show();
        $('#img-fat').hide();
        $('#img-slim').hide();
    }
    $('#result').text('計算結果 BMI : ' + bmi + text);
}