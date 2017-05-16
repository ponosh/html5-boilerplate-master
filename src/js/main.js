console.log('Hello world!');

$(document).ready(function() {
	console.log('ready');

$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});