var but = document.getElementById('but');
touch.on(but,'tap',function(){
    $.ajax({
        url:"http://192.168.1.94:3000/users",
        type:'post',
        data:{
            type:'register',
            phone:$('#user').val(),
            pass:$('#pass').val(),
        },
        success:function(res){
            console.log(res);
        },
        dataType:'json',
    });
})