$(function() {
	var spinner = $("#spinner").spinner();

	$("#disable").toggle(function() {
		spinner.spinner("disable");
	}, function() {
		spinner.spinner("enable");
	});
	$("#destroy").toggle(function() {
		spinner.spinner("destroy");
	}, function() {
		spinner.spinner();
	});
	$("#getvalue").click(function() {
		alert(spinner.spinner("value"));
	});
	$("#setvalue").click(function() {
		spinner.spinner("value", 5);
	});

	$("button").button();
});
