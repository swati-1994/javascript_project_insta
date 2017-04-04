var json_obj;
$.getJSON("mock_data.json", function (data) {
    json_obj = data;
});

var pageId = null;

var button_id = null;

window.onbeforeunload = function () {
    return "You work will be lost.";
};

if ('onhashchange' in window) {
    // Setup our event listener for the hash change
    window.addEventListener('hashchange', changeView, false);
    // Our custom event handler
    function changeView() {
        var type = window.location.hash.substr(1);

        if (pageId === '3' && type === 'listing') {
            $(".detail").hide();
            $(".listing").show();
            pageId = 2;
        }


        // alert(type);
    }
}

(function ($) {

    $(window).on('popstate', function (event) {

        if (pageId === '2') {
            $(".listing").hide();
            $("#first").show();
        }
        else if (pageId === '3') {
            $(".detail").hide();
            $(".listing").show();
        }

    });

    $(function () {
        var id = null;
        $(document).ready(function () {
            $("#first").hide();
            $(".listing").hide();
            $(".detail").hide();

            if (pageId === null) {
                pageId = '1';
            }

            if (pageId === '1') {
                $("#first").show();
            }
            else if (pageId === '2') {
                $(".listing").show();
            }
            else if (pageId === '3') {
                $(".detail").show();
            }

        });

        $("#button1").click(function () {
            // var y=document.getElementById("password").value;
            var x = document.getElementById("fname").value;
            var y = document.getElementById("password").value;

            if (x == 'yoda' && y == 'dogbah') {
                $("#first").hide();
                history.pushState("listing", "page2", "listing");
                $(".listing").show();

                pageId = '2';

                $.each(json_obj.data, function (k, v) {
                    $("#ct").append('<div class=""><div><img src="' + json_obj.data[k]["image"] + '" class="animated wobble">' +
                        '</div></div>' + '<br>' +
                        '<div><input type="radio" name="characters" class="radio" id=' + json_obj.data[k]["id"] + '></div>'
                    );
                });
                $(".radio").click(function (event) {
                    button_id = event.target.id;
                });
            } else {
                alert('invalid username');
            }


        });


        $("#button2").click(function () {

            if (button_id) {
                var name = json_obj.data[button_id]["name"]
                $(".listing").hide();
                history.pushState("detail", "page3", name);
                $(".detail").show();
                pageId = '3';
                $(".detail").append('<div><h1> Unlock the force</h1><img src="' + json_obj.data[button_id]["image"] + '"' +
                    ' class="image3 animated fadeInDownBig"></div>' +
                    '<div class="content3 animated rubberBand">' +
                    '<h1>' + json_obj.data[button_id]["name"] + ' </h1>' +
                    '<p>' + json_obj.data[button_id]["about"] + '</p>' +
                    '</div>'
                );
            }
            else {
                alert("Please select any one image");
                $(".listing").show();
            }
        });
    });
})(jQuery);
