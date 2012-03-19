/**
 * @author Brandan Majeske
 */


	$(function() {
		$( "#datepicker" ).datepicker();
	});

/*$(document).ready(function() {
	if (!Modernizr.input.autofocus) {
		$("input[autofocus]").focus(); 
		}
	});

$(document).ready(function() {
	if (!Modernizr.inputplaceholder) {
		makePlaceholders();
	}
});

$("document").ready(function() {
	$("input[required]").css("border", "1px solid #0084FF")
});

$("document").ready(function() {
	if (!Modernizr.inputtypes.number) {
		var $numerics = $("input[type=number]");
		$numerics.each(function () {
			var thisNum = $(this);
			thisNum.spinner({
				min: thisNum.attr("min"),
				max: thisNum.attr("max"),
				step: thisNum.attr("step")
			});
		}); */

    $("document").ready(function () {
        if (!Modernizr.input.placeholder) {
            makePlaceholders();
        }

        if (!Modernizr.inputtypes.number) {
            var $numerics = $("input[type=number]");
            $numerics.each(function () {
                var thisNum = $(this);
                thisNum.spinner({
                    min: thisNum.attr("min"),
                    max: thisNum.attr("max"),
                    step: thisNum.attr("step")
                });
            });
        }

        if (!Modernizr.inputtypes.date) {
            var $dates = $("input[type=date]");
            $dates.each(function () {
                var thisDate = $(this);
                thisDate.datepicker({
                    minDate: thisDate.attr("min"),
                    maxDate: thisDate.attr("max"),
                    dateFormat: "yy-mm-dd"
                });
            });
        }
    });
    

