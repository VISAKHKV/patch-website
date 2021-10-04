$(document).ready(function (){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        items:1
    });
    $("#faq .tab-head a").on("click",function(){
        var $this = $(this);
        $("#faq .tab-head a").removeClass("active");
        $this.addClass("active");
        let clicked_tab = $this.data("id");
        $("#faq .tab-body div.item").removeClass("active");
        $(`#${clicked_tab}`).addClass("active");
    });

});