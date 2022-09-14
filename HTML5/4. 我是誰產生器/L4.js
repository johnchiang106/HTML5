var places = ['台南', '高雄', '屏東', '嘉義', '雲林', '台中', '彰化', '新竹', '桃園', '台北', '新北', '宜蘭', '花蓮']
// var places = ['士林','北投','木柵','三重','南港','淡水','新店','蘆洲','古亭','中壢','池上','汐止','三峽'];
var stars = ['金城武','劉德華','周杰倫','蔡依林','新垣結依','宋仲基','鄭容和','蕭敬騰','五月天','池昌旭','魔力紅'];

$('.js-btn').click(function(){
    var r1 = Math.floor(Math.random()*places.length);
    var r2 = Math.floor(Math.random()*stars.length);
    // console.log(r1);
    $('.js-result').text(places[r1]+stars[r2]);
})