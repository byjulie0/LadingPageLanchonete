$(document).ready(function(){
    $('.mobile_btn').on('click',function(){
        $('mobile_btn').toggleClass('active');
        $('.mobile_btn').find('i').toggleClass('fa-x');
    })
})