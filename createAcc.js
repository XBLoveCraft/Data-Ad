    $(document).ready(function() {
      $('#createAccountForm').submit(function(event) {
        event.preventDefault();

        var username = $('#username').val();
        var password1 = $('#password1').val();
        var password2 = $('#password2').val();

        if (password1 !== password2) {
          alert("Passwords do not match!");
          return;
        }

        // Send AJAX request to the account creation PHP script
        $.ajax({
          url: 'create_account.php',
          method: 'POST',
          data: { username: username, password: password1 },
          success: function(response) {
            alert(response);
            // Optionally, you can redirect the user to a login page or perform other actions upon successful account creation
          },
          error: function() {
            alert('An error occurred');
          }
        });
      });
    });
