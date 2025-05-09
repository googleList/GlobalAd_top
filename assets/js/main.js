(function(a) {
    jQuery(document).ready(function() {
        var b = a("#body-overlay");
        var c = a("#search-popup");
        a(document).on("click", "#body-overlay", function(d) {
            d.preventDefault();
            b.removeClass("active");
            c.removeClass("active")
        });
        a(document).on("click", "#search", function(d) {
            d.preventDefault();
            c.addClass("active");
            b.addClass("active")
        });
        a(document).on("click", ".navbar-area .navbar-nav li.menu-item-has-children>a", function(d) {
            d.preventDefault()
        });
    
        
        a(".tab-accordion ul li").on("click", function() {
            var d = a(this).attr("class");
            a(this).addClass("active").siblings().removeClass("active");
            a("." + d + "-content").addClass("active").siblings().removeClass("active")
        });
     
        a(".service-widget-tab ul li").on("click", function() {
            var d = a(this).attr("class");
            a(this).addClass("active").siblings().removeClass("active");
            a("." + d + "-content").addClass("active").siblings().removeClass("active")
        })
    });
 
}
)(jQuery);
