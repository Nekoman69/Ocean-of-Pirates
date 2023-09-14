function drawImage(img, _x, _y, size) {
  image(img, _x - size / 2, _y - size / 2, size, size);
}

function newButton(_variable ,_name, _function, _x,_y,_size){
  _variable = createButton(_name);
  _variable.position(_x, _y);
  _variable.size(75,_size);
  _variable.mousePressed(_function);
}