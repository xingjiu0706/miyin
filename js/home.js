var miyin_banner = document.getElementsByClassName('miyin-banner')[0];
var art_new = document.getElementById('art-new');
var art_hot = document.getElementById('art-hot');
var arr_music = ['./music/music-1.mp3','./music/music-2.mp3','./music/music-3.mp3','./music/music-4.mp3','./music/music-5.mp3'];
$.ajax({
    url:"http://192.168.1.94:3000/home",
    type:'get',
    data:{
        type:'banner',
    },
    success:function(res){
        console.log(res);
        var dot_rem = doT.template(document.getElementById('list_template').innerText);
        miyin_banner.innerHTML = dot_rem(res.imglist);
        var swiper1 = new Swiper('.swiper-container',{
            autoplay: {
                delay: 3000,
            },
            effect : 'slide',
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
    dataType:'json',
});
$.ajax({
    url:"http://192.168.1.94:3000/home",
    type:'get',
    data:{
        type:'new',
    },
    success:function(res){
        console.log(res);
        var dot_rem = doT.template(document.getElementById('new_template').innerText);
        art_new.innerHTML = dot_rem(res.musicList);
    },
    dataType:'json',
});
$.ajax({
    url:"http://192.168.1.94:3000/home",
    type:'get',
    data:{
        type:'recommend',
    },
    success:function(res){
        console.log(res);
        var dot_rem = doT.template(document.getElementById('hot_template').innerText);
        art_hot.innerHTML = dot_rem(res.musicList);
    },
    dataType:'json',
});
$('#new').on('touchstart',function(){
    $('#hot').removeClass('line');
    $('#new').addClass('line');
    $('.inner').removeClass('move-left');
    $('.inner').addClass('move-right');
})
$('#hot').on('touchstart',function(){
    $('#new').removeClass('line');
    $('#hot').addClass('line');
    $('.inner').removeClass('move-right')
    $('.inner').addClass('move-left');
})




function setRem(){
    var windw = document.documentElement.clientWidth || document.body.clientWidth;
    var uiw = 750;
    document.documentElement.style.fontSize = (windw/uiw)*10+'px'
}
setRem();
window.onresize = setRem;

var music = document.getElementById('music');
var play_pause = document.getElementById('play-pause');
var player_left = document.getElementById('player-left');



music.addEventListener('canplay',function(){

touch.on(play_pause,'tap',function(){
    var getclass = play_pause.getAttribute('class');
    if(getclass.split('-')[2] == 'stop'){
        $('#play-pause').removeClass('tool-stop');
        $('#play-pause').addClass('tool-play');
        $('#player-left').addClass('zhuan');
        music.play();
    }
    else{
        $('#play-pause').removeClass('tool-play');
        $('#play-pause').addClass('tool-stop');
        $('#player-left').removeClass('zhuan');
        music.pause();
    }
    })
$('.player-list li').on('touchstart',function(){
    var a = $(this).index()
    music.setAttribute('src',arr_music[a])
    $('#play-pause').removeClass('tool-play');
    $('#play-pause').addClass('tool-stop');
    $('#player-left').removeClass('zhuan');
    music.pause();
    $('#play-pause').removeClass('tool-stop');
    $('#play-pause').addClass('tool-play');
    $('#player-left').addClass('zhuan');
    music.play();
})
})

$('#tool-list').on('touchstart',function(){
    $('.player-list').toggle()
})