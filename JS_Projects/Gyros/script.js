var modal = document.getElementById('myModal');
var content = document.querySelector('.modal-content');
var address = document.getElementById('address');
var span = document.getElementsByClassName('close')[0];

var modal2 = document.getElementById('myModal2');
var content2 = document.querySelector('.modal-content2');
var when = document.getElementById('when');
var span2 = document.getElementsByClassName('close2')[0];

address.onclick = function() {
  modal.style.display = 'block';
  content.style.animation = 'drop 0.7s forwards ease';
};
span.onclick = function() {
  modal.style.display = 'none';
};

when.onclick = function() {
  modal2.style.display = 'block';
  content2.style.animation = 'drop 0.7s forwards ease';
};
span2.onclick = function() {
  modal2.style.display = 'none';
};
