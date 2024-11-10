const draggable = document.getElementById('draggable')
//What is the element name for the individual ornaments?

const tree = document.getElementById('tree_container')

let offsetX, offsetY, isDragging = false;

draggable.addEventListener('mousedown', function(e) ) {
    idDragging = true;
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top;

    

