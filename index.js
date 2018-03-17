var to_add;

$(document).ready(function(){

    $('button').click(function () {
        if($('input').val() === ' ' || $('input').val() ===''){
            alert("Please enter todo first");
        }
        else{
        to_add = $('input').val();
        $('#two').append('<div class="item"> <button>&#x2714;</button> <p>'+to_add+'</p>');
        }

    });

});

$(document).on('mouseenter','.item',function () {
    $(this).addClass('highlight');
    
})
$(document).on('mouseleave','.item',function () {
    $(this).removeClass('highlight');
})
$(document).on('click','.item button', function () {
    $(this).closest('div').remove();
})

$('input').keydown(function (e) {
    if($('input').val()===' ' || $('input').val()===''){
        alert("Please enter todo first");
    }

    else if(e.keyCode == 13){
        to_add = $('input').val();
        $('#two').append('<div class="item"> <button>&#x2714;</button> <p>'+to_add+'</p>');
        return false;
    }

});

