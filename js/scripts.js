function newItem() {
    let inputValue = $('#input').val();
    let li = $('<li></li>');
    li.text(inputValue);
  
    if (inputValue  === ''){
      alert('You must write something!');
    } else {
        $('#list').append(li);
    }
  
    li.on ('dbclick',function() {
      li.toggleClass("strike");
    });
  
    let crossOutButton = $('<button></button>');
    crossOutButton.text('X')
      li.append(crossOutButton);
  
      crossOutButton.on('click',function() {
        li.addClass('delete');
      });
  
      $('#list').sortable();
    }