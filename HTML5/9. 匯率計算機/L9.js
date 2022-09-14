var ntd2usd = 1 / 30.665;
var usd2ntd = 29.995;
var ntd2jpy = 1 / 0.2756;
var jpy2ntd = 0.2628;
// 按鈕觸發
$('#ntd').keydown(ntd_to_else);
$('#jpy').keydown(jpy_to_else);
$('#usd').keydown(usd_to_else);
// 功能
function ntd_to_else () {
    var j = $('#ntd').val() * ntd2jpy;
    var u = $('#ntd').val() * ntd2usd;
    $('#jpy').val(j.toFixed(3));
    $('#usd').val(u.toFixed(3));
}

function jpy_to_else () {
    var n = $('#jpy').val() * jpy2ntd;
    var u = $('#jpy').val() * jpy2ntd * ntd2usd;
    $('#ntd').val(n.toFixed(3));
    $('#usd').val(u.toFixed(3));
}

function usd_to_else () {
    var n = $('#usd').val() * usd2ntd;
    var j = $('#usd').val() * usd2ntd * ntd2jpy;
    $('#ntd').val(n.toFixed(3));
    $('#jpy').val(j.toFixed(3));
}
