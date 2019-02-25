 $(document).ready(function() {
            $('#submit').click(function(e) {

               var name = $('#name').val();
               var phone = $('#phone').val();
               var email = $('#email').val();
               var confirmEmail = $('#confirmEmail').val();
               var st_address = $('#st_address').val();
               var city = $('#city').val();
               var state = $('#state').val();
               var zip = $('#zip').val();

               var name_regex = /^[a-zA-Z]+$/;
               var phone_regex = /^[0-9]*$/;
               var add_regex = /^[0-9a-zA-Z]+$/;
               var zip_regex = /^[0-9]+$/;
               

               if (name.length == 0 || name.match(name_regex) == null) {
                  $('#name_error').text("* Please enter your name *"); 
                  $("#name").focus();
                  alert("* Please enter your name *");
                  return false;
               }

               if (phone.length < 10 || phone.match(phone_regex) == null) {
                  $('#phone_error').text("* Please enter a valid phone number *");
                  alert("Invalid phone number"); 
                  $("#phone").focus();
                  return false;
               }

               if (email.length == 0 || email.indexOf('@')<=1 || email.indexOf('.')<=2) {
                  $('#email_error').text("* Please enter valid email address *"); 
                  $("#email").focus();
                  return false;
               }

               if(email !== confirmEmail) {
                  $('#confirmEmail_error').text("* Email address is not matching *"); 
                  $("#confirmEmail").focus();
                  return false;
               }

               if (st_address.length == 0) {
                  $('#st_addr').text("* Please enter your address *"); 
                  $("#st_address").focus();
                  return false;
               }

               if (st_address.length == 0) {
                  $('#st_addr').text("* Please enter your address *"); 
                  $("#st_address").focus();
                  return false;
               } 

               if (city.length == 0) {
                  $('#city_err').text("* Please enter city name *"); 
                  $("#city").focus();
                  return false;
               }

               if (state.length == 0) {
                  $('#state_err').text("* Please enter state name *"); 
                  $("#state").focus();
                  return false;
               }

               if (zip.length == 0 || zip.match(zip_regex) == null || zip.length != 5) {
                  $('#zip_err').text("* Please enter valid zip code *"); 
                  $("#zip").focus();
                  return false;
               }

               else {
                  alert("Form Submitted Successfully..")
                  return true;
               }

            });
            
         });