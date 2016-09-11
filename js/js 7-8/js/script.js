    $input = $('.input');
    $input.hover(
        function () {
            var $hint1 = $('.hint');
            $hint1.remove();
            var $hint = $(this).attr("title");
            $(this).removeAttr("title");
            var $hint1 = ('<div class="hint"></div>');
            var $line = $(this).closest(".line");
            console.log($line);
            $line.append($hint1);
            $hint1 = $('.hint');
            $hint1.css ({
                boxShadow: 'rgba(0, 0, 0, 0.74902) 0px 0px 5px 1px',
                height:'30px',
                
                padding: '10px 10px 0 0',
                width: '535px'
            })
            $hint1.html($hint);    
        }, function (){
            var $hint1 = $('.hint');
            var $hint = $hint1.html();
            console.log($hint);
            $hint1.remove();
            $(this).attr("title", $hint);
        });
    var $button = $('#show_help');
    $button.on("click", function (e) {
        e.preventDefault();
        var $hints = $('.input');
        console.log($hints);
        $hint = $('.hint');
        $hint.remove();
        $hints.each(function (index) {
            console.log(index);
            var $title = $(this).attr("title");
            var hintNumber = ('hint' + index);
            console.log(hintNumber);
            var $hint = ('<div class="hint ' + hintNumber + '"></div>');
            var $line = $(this).closest(".line");
            $line.append($hint);
            $hint = $('.hint');
            var a = document.querySelector('.' + hintNumber);
            console.log(a);
            a.innerHTML = ($title);
            
        });
    });    
(function($) {
$(function() {

    $('ul.tabs__caption ').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

});
})($);

