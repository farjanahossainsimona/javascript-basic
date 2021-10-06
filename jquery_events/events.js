$(document).ready(function () {
    //multiple event using on method
    $("h6").on ({
        //action
        mouseenter : function(){
            $(this).css("background-color", "red");
        },
        mouseleave : function(){
            $(this).css("background-color", "green");
        },
        click : function(){
            $(this).css("background-color", "yellow");
        }
    });

    $("input").focus(function () {
        //action
        $(this).css("background","#ccc");
    });

    $("p").click(function () {
        //action
        $(this).hide();
    });
    $("h1").dblclick(function () {
        //action
        $(this).hide();
    });
    $("h2").mouseenter(function () {
        //action
        $(this).hide();
    });
    $("h3").mouseenter(function () {
        //action
        alert("danger");
    });
    $("h4").mouseleave(function () {
        //action
        alert("thanks for your kindness");
    });
    $("h5").hover(function () {
        //action
        alert("what is your problem?");
    },
    function(){
        alert("hmm");
    });
});