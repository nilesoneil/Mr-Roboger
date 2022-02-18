$(document).ready(function() {
  $("form#pastry").submit(function(event) {
    const age = $("input:radio[name=millenial/boomer]:checked").val();
    const gender = $("select#gender").val();

    if (gender === 'male' && age === 'younger') {
    $("#result1").show();
    $("#result2").hide();
    $("#result3").hide();
    $("#result4").hide();
    } else if (gender === "female") {
    $("#result1").hide();
    $("#result2").show();
    $("#result3").hide();
    $("#result4").hide();
    } else if (age === "older" && gender === "male") {
    $("#result1").hide();
    $("#result2").hide();
    $("#result3").show();
    $("#result4").hide();
    } else if (gender === "female") {
    $("#result1").hide();
    $("#result2").hide();
    $("#result3").hide();
    $("#result4").show();
    }

    event.preventDefault();
  });
});