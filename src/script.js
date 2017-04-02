var json_obj;
$.getJSON("mock_data.json", function (data) {
    json_obj = data;
});


var button_id=null;
(function ($) {

    // var id=null;
     $(function () {
         var id=null;
         $(document).ready(function(){
             $(".listing").hide();
         });

         $( "li" ).each(function( index ) {
             console.log( index + ": " + $( this ).text() );
         });

         $("#button1").click(function(){
             $("#first").hide();
             $(".listing").show();

             $.each(json_obj.data, function( k, v ){
                 $("#ct").append('<div class="image1"><img src="' + json_obj.data[k]["image"] + '"></div>'+'<br>'+
                         '<div><input type="radio" name="characters" class="radio" id='+json_obj.data[k]["id"]+'></div>'
                 );
             });

             $(".radio").click(function(event) {
                button_id= event.target.id;
             });
         });


         $("#button2").click(function(){

             if(button_id) {

                 $(".listing").hide();
                 $(".detail").show();


                 $(".detail").append('<div><img src="' + json_obj.data[button_id]["image"] + '"></div>'+
                         '<div class="content3">'+
                     '<h1>'+json_obj.data[button_id]["name"]+' </h1>'+
                     '<p>'+json_obj.data[button_id]["about"]+'</p>'+
                 '</div>'
                 );
             }

             else{
                 alert("Please select any one image");
                 $(".listing").show();


             }
            // var swati=id;
            // console.log("id",swati)

             // $.each(json_obj.data, function( k, v ){
             //     $("#ct").append('<div><img class="image1" src="' + json_obj.data[k]["image"] + '"></div>'+
             //         '<input type="radio" name="charecters"  class="radio">'
             //     );
             //
             // });
         });



     });
})(jQuery);


// <input type="radio" name="charecters"  class="radio" >