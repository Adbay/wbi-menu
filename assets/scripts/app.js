$(function() {
  // load the widget configuration
  var config = new WidgetConfig();
  config.on("config-initialized", function(event, data) {
    //$("#output").text(config.preferences["Article Number"]);
    //load the page
    $.get(config.preferences["Feed"], "", function(data, textStatus, jqXHR) {
      $("#title").text(data[0][0]);
      $("#menu").html(data[1][0].replace(/\n/g, "<br>"));
      $("#times").text(data[2][0]);
    });
  });
  config.on("config-error", function() {
    $("#output").text("Error loading preferences");
  });
  config.init();
});

function get_random(myList) {
  return Math.floor(Math.random() * 72);
}
