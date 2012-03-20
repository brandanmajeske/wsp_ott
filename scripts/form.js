/**
 * @author Brandan Majeske
 */


	$(function() {
		$( "#datepicker" ).datepicker();
	});
	
	$.widget( "ui.timespinner", $.ui.spinner, {
		options: {
			// seconds
			step: 60 * 1000,
			// hours
			page: 60
		},

		_parse: function( value ) {
			if ( typeof value === "string" ) {
				// already a timestamp
				if ( Number( value ) == value ) {
					return Number( value );
				}
				return +Globalize.parseDate( value );
			}
			return value;
		},

		_format: function( value ) {
			return Globalize.format( new Date(value), "t" );
		}
	});

	$(function() {
		$( "#spinner" ).timespinner();

		$( "#culture" ).change(function() {
			var current = $( "#spinner" ).timespinner( "value" );
			Globalize.culture( $(this).val() );
			$( "#spinner" ).timespinner( "value", current );
		});
	});

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
    
	
