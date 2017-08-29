(function() {
  $(function() {
    var $domain, $generate, $input, $output;
    $domain = $("#domain");
    $output = $("#output");
    $input = $("#input");
    $generate = $("#generate");
    $generate.on("click", function(event) {
      var monthFromNow, output, prefix, segment, _i, _len, _ref;
      monthFromNow = parseInt((new Date()).getTime() / 1000 + 2592000, 10);
      prefix = "." + ($domain.val()) + "\tTRUE\t/\tFALSE\t" + monthFromNow + "\t";
      output = "# Netscape HTTP Cookie File\n# http://curl.haxx.se/rfc/cookie_spec.html\n# This is a generated file!  Do not edit.\n\n";
      _ref = $input.val().split(";");
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        segment = _ref[_i];
        segment = $.trim(segment).split("=", 2);
        if (segment.length < 2) {
          continue;
        }
        output += "" + prefix + segment[0] + "\t" + segment[1] + "\n";
      }
      $output.val(output);
      return false;
    });
    return $output.on("click", function(event) {
      return $(this).select();
    });
  });

}).call(this);

/*
//@ sourceMappingURL=cookies.coffee.js.map
*/