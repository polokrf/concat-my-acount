document.getElementById('btn').onclick = function () {
  document.getElementById('heading').style.display = 'none';
  document.getElementById('main-sctn').style.height = '530px';
  document.getElementById('main-contact-div').style.top='0px'
}

document.getElementById('button').onclick = function () {
  document.getElementById('heading').style.display = 'block';
  document.getElementById('main-contact-div').style.display = 'none';
  document.getElementById('main-sctn').style.height = '100%';
}