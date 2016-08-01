(function() {
  $(function() {
    var links;
    links = $(".nav-container a").filter(function() {
      return this.hostname !== window.location.hostname;
    });
    links.attr("target", "_blank");
    $(window).on("scroll", function(event) {
      return $("html").toggleClass("is-scrolled", $(window).scrollTop() > 0);
    });
    return $(".js-tooltip").qtip({
      position: {
        my: "top right",
        at: "bottom left"
      },
      style: {
        classes: "qtip-dark qtip-rounded tooltip"
      }
    });
  });

}).call(this);

/*
//@ sourceMappingURL=things.coffee.js.map
*/