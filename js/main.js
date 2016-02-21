
//add lettersonly method to be called later when only letter should be accepted.
jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z\s]+$/i.test(value);
});
$(document).on('ready', function(){
  //validate method, add rules to elements and messages to apply to the errors.
  $("#order-form").validate({
    errorClass: "my-error-class",
    validClass: "my-valid-class",
    submitHandler: function(form){
      form.submit();
    },
    rules: {
      "your-name": {
        required: true,
        maxlength: 128,
        lettersonly: true,
        },
      "your-address": {
        required: true,
      },
      "your-city": {
        required: true,
      },
      "your-state": {
        required: true,
        minlength: 2,
        maxlength: 2
      },
      "your-zip": {
        required: true,
        minlength: 5,
        maxlength: 5,
        digits: true
      },
      "card-holder-name": {
        required: true,
        lettersonly: true,
        maxlength: 128
      },
      "card-number": {
        required: true,
        creditcard: true,
        minlength: 16,
        maxlength: 19
      },
      "cvv": {
        required: true,
        digits: true,
        minlength: 3,
        maxlength: 3
      },
      "expiry-month": {
        required: true,
        min: 0
      },
      "shipping-method": {
        required: true,
      },
      "comments": {
        required: false,
        maxlength: 500
      },
    },
    messages: {
      "your-name": "Please enter your first and last name.",
      "your-address": "Please enter your street address.",
      "your-city": "Please enter your city name.",
      "your-state": "Please enter your 2 letter state abbreviation.",
      "your-zip": "Please enter 5 digit zip code.",
      "shipping-method": "please enter your preffered method for shipping.",
      "expiry-month": "Please select a month.",
      "shipping-method": "Please enter your preferred shipping method.",
      "comments": "Must be less than 500 characters.",
      "card-holder-name": "Please enter the full name on your card.",
      "card-number": "Please enter 16 digit credit card number.",
      "cvv": "Please enter 3 digit code on the back of your card.",
    },

  });
  //bootstrap tooltip method to display hints when hovering over question marks
  $('label span.glyphicon').tooltip();
});
