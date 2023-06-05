
    $(document).ready(function() {
      $('form').submit(function(event) {
        event.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();

        $.ajax({
          url: 'connection.php',
          method: 'POST',
          data: { username: username, password: password },
          success: function(response) {
            alert("dasdasdas");
          },
          error: function() {
            alert('An error occurred');
          }
        });
      });
    });
    varname = "12345";


    console.log(btoa(name));
    var pass = btoa(name);
    console.log(atob(pass));

        