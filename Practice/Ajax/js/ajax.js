// $(document).ready(function() {
//     $.ajax({
//         url: "https://jsonplaceholder.typicode.com/posts/1",
//         type: "GET",
//         success: function(data) {
//             console.log(data);
//             $("#result").html("<p>" + data.title + "</p>");
//         },
//         error: function(jqXHR, textStatus, errorThrown) {
//             console.log(textStatus, errorThrown);
//         }
//     });
// });


$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/posts/1",
    success: function(response) {
      console.log(response);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });
  

