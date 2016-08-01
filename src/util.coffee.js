(function() {
  var exports;

  window.util = exports = {};

  exports.timeAgo = function(from) {
    var date, days, hours, minutes, months, seconds, years;
    date = new Date();
    from = date.setTime(Date.parse(from));
    seconds = (new Date() - from) / 1000;
    minutes = Math.floor(seconds / 60);
    hours = Math.round(minutes / 60);
    days = Math.floor(minutes / 1440);
    months = Math.floor(minutes / 43200);
    years = Math.floor(minutes / 525960);
    switch (false) {
      case minutes !== 0:
        return "less than a minute ago";
      case minutes !== 1:
        return "a minute ago";
      case !(minutes < 45):
        return "" + minutes + " minutes ago";
      case !(minutes < 90):
        return "about 1 hour ago";
      case !(minutes < 1440):
        return "about " + hours + " hours ago";
      case !(minutes < 2880):
        return "1 day ago";
      case !(minutes < 43200):
        return "" + days + " days ago";
      case !(minutes < 86400):
        return "about 1 month ago";
      case !(minutes < 525960):
        return "" + months + " months ago";
      case !(minutes < 1051199):
        return "about 1 year ago";
      default:
        return "over " + years + " years ago";
    }
  };

}).call(this);

/*
//@ sourceMappingURL=util.coffee.js.map
*/