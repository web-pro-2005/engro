$(document).ready(function(){
    let x = $("#myForm").html();
    function hello() {
        return x;
    }
    $(".b1").click(function () {
        
        $("#myForm").after(hello());
       
    })
    $(".b1").click(function () {
        incrementValue();
})

    $(document).on
    ("click", ".b2", function () {
        $(this).closest('.a0').remove();
        
    });



    let row = $(this).closest('.a0'); 
    let a=$(".b3").text();
    function incrementValue() {
    //    alert(value)
    
        a++;
        // document.getElementById('.b3').innerText = a;
        // alert(a);
        row.find(".b3").text(a);
    }
























})
// $(document).ready(function(){
//     let x = $("#myForm").html();
//     let value = 1; // Initialize value for incrementing

//     function getNewFormContent() {
//         return x; // Return the content to be duplicated
//     }

//     $(".b1").off("click").on("click", function () {
//         $("#myForm").after(getNewFormContent()); // Append new form content

//         incrementValue(); // Update the value in the newly added form
//     });

//     $(document).on("click", ".b2", function () {
//         $(this).closest('.a0').remove(); // Remove the closest .a0 container
//     });

//     function incrementValue() {
//         value++;
//         $(".b3").each(function() {
//             if ($(this).closest('.a0').find('.b3').length > 0) {
//                 $(this).text(value); // Update the text of the .b3 element
//             }
//         });
//     }
// });
