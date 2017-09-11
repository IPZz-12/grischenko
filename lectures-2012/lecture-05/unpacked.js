$(document).ready(function(){
    $('ul.menu a').click(function(e) {
        e.preventDefault();
        var i = 0;
        var message = 'Menu item clicked ' + (++i);
        alert(message);
    });

    function foo() {
        alert('Do something');
    };
});