var max = 500;
var textarea = document.getElementById('ticket_textbox')
var info = document.getElementById('remaining_count')
var current_textValue = document.getElementById('current_count')
//Init the count for the first time
//info.textContent = max - textarea.value.length;
info.textContent = max
current_textValue.textContent = textarea.value.length
textarea.addEventListener('input', function () {
    current_textValue.textContent = this.value.length;
})

$(document).keypress(
    function (event) {
        if (event.which == '13') {
            event.preventDefault();
        }
    });

var initial_string = $("#ticket_textbox").val();
$(document).ready(function () {

    $("#issues_button").click(function () {

        var ticket_textbox = $("#ticket_textbox").val();



        if ($("#ticket_textbox").val().length < 2 || $("#ticket_textbox").val() == initial_string) {
            $('#error_message').css("color", "red");
            $('#error_message').html('Please enter some text ');
            return false;
        }
        else {

            $.ajax({
                type: "POST",
                url: "contact_us_PHP.php",
                data: {
                    ticket_textbox: ticket_textbox
                },
                cache: false,
                success: function (data) {
                    console.log(data);
                    location.reload(true);
                },
                error: function (xhr, status, error) {
                    console.error(xhr);
                }
            });
        }

    });

});