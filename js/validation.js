$(document).ready(function () {
  $("#signup").validate({


    rules: {
      'username': {
          required: true,
          minlength: 4,
          maxlength: 15
      },

      'password': {
        required: true,
        minlength: 6,
        maxlength: 20
      },
        'verify_password': {
            equalTo: "#password"
        },

        'email': {
            required: true,
            maxlength: 40
        },
        'verify_email': {
            equalTo: "#email"
        }
    }

  });
});
