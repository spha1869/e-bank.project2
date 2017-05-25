$(function() {
    //Contacts
    $('#get-button').on('click', function() {
        $.ajax({
            url: '/Contacts',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('tbody');

                tbodyEl.html('');

                response.products.forEach(function(product) {
                    tbodyEl.append('\
                     <table>\
                      <thead>\
                         <th>ID</th>\
                         <th>Name</th>\
                         <th>number</th>\
                         <th>Action</th>\
                      </thead>\
                       <tr>\
                        <td class="id">'+ product.id +'</td>\
                           <td><td input type="text" class="name " value"'+ product +'"></td>\
                           <td><td input type="number" class="number" value"'+ product +'"></td>\
                           <td>\
                           <button class="update-button">save</button>\
                           <button class="delete-button">delete</button>\
                     </table>\
                    ');
                });
            }
        });
    });

    //Photos
    $('#get-button').on('click', function() {
        $.ajax({
            url:'/photos',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('tbody');

                tbodyEl.html('');

                response.product.forEach(function(product) {
                    tbodyEl.append('\
                    <table>\
                       <tr>\
                        <th colspan="4">Photo Gallery</th>\
                       </tr>\
                         <td>'+ photo.id + '</td>\
                    ');
                });
            }
        });
    });

    //Songs
    $('#get-button').on('click', function(product) {
        $.ajax({
            url:'/Photos',
            contentType:'application/json',
            success:function(response) {
                var tbodyEl = $('tbody');

                tbodyEl.html('');

                response.product.forEach(function(product) {
                    tbodyEl.append('');
                });
            }
        });
    });

   //Videos
   $('get-button').on('click', function(product) {
       $.ajax({
           url: '/Videos',
           contentType: 'application/json',
           success:function(response) {
               var tbodyEl = $('tbody');

               tbodyEl.html('');

               response.product.forEach(function(product) {
                   tbodyEl.append('')
               });
           }
       });
   });

   //PDF files
    $('get-button').on('click', function(product) {
       $.ajax({
           url: '/Videos',
           contentType: 'application/json',
           success:function(response) {
               var tbodyEl = $('tbody');

               tbodyEl.html('');

               response.product.forEach(function(product) {
                   tbodyEl.append('');
               });
           }
       });
   });

  //POST
  $('get-button').on('click', function(product) {
      $.ajax({
          url:'/form',
          contentType: 'application/json',
          success: function(response) {
              var formEl = $('\
              <form id="create-form">\
                 <input type="text" id="create-input>\
                   <button>save contact</butto>\
              </form>\
              <br>\
              <form id="search-form">\
                <input type="file" id="update-input">\
                  <button>save photo</button>\
              </form>\
              <br>\
                <form id="search-form">\
                <input type="file" id="update-input">\
                  <button>save songs/button>\
              </form>\
              <br>\
                <form id="search-form">\
                <input type="file" id="update-input">\
                  <button>save videos</button>\
              </form>\
              <br>\
                <form id="search-form">\
                <input type="file" id="update-input">\
                  <button>save PDF files</button>\
              </form>\
              ');
          }
      });
   });

   //Save
   $('table').on('click', '.update-button', function() {
       var rowEl = $(this).closest('tr');
       var id = rowEl.find('id').text();
       var newName = rowEl.find('.name').val();

       $.ajax({
           url:'/Contact',
           method: 'PUT',
           contentType: 'application/json',
           data: JSON.stringify({newName: newName }),
           success: function(response) {
               console.log(reponse);
               $('#get-button').click();
           }
       });
   });

   //delete
   $('table').on('click', '.delete-button', function() {
       var rowEl = $(this).closest('tr');
       var id = rowEl.find('.id').text();

       $.ajax({
           url: '/Contacts' + id,
           method: 'DELETE',
           contentType: 'application/json',
           success: function(reponse) {
               console.log(reponse);
               $('#get-button').click();
           }
       });
   });   
});