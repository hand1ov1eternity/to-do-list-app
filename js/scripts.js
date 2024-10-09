$(document).ready(function() {
  $('#button').on('click', newItem);
});

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
      console.log('Item double-clicked');
      li.toggleClass('strike');
    });
  
    let crossOutButton = $('<button></button>');
    crossOutButton.text('X')
      li.append(crossOutButton);
  
      crossOutButton.on('click',function() {
        li.addClass('delete');
      });
  
      $('#list').sortable();
  }