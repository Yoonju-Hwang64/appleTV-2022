
let curPos = 0; 

function prev(){
    if(curPos > 0){
        $("button").removeAttr("disabled") ;
       
        $($(".item")[curPos]).toggleClass("active");
        $($(".step")[curPos]).toggleClass("active-step");
        $(".item").hide();
        curPos -= 1;
        $($(".item")[curPos]).toggleClass("active");
        $($(".step")[curPos]).toggleClass("active-step");
        $(".active").fadeIn(800);
    };
    if(curPos == 0){
        $(".prev")[0].setAttribute("disabled",'true');
    };
}
function next(){
    if(curPos < 3){
        $("button").removeAttr("disabled");
        $($(".item")[curPos]).toggleClass("active");
        $($(".step")[curPos]).toggleClass("active-step");
        $(".item").hide();
        curPos += 1;
        $($(".item")[curPos]).toggleClass("active");
        $($(".step")[curPos]).toggleClass("active-step");
        $(".active").fadeIn(800); 
    };
    if(curPos == 3){
        $(".next")[0].setAttribute("disabled",'true');
    };
};
function init(){
    $(".item").hide();
    $(".active").show();
    $(".prev").click(prev);
    $(".next").click(next);
};
$(document).ready(function(){

    init();
});