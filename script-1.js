const draggable = document.getElementById('draggable')
//What is the element name for the individual ornaments?

const tree = document.getElementById('tree_container')

let offsetX, offsetY, isDragging = false;

draggable.addEventListener('mousedown', function(e) ) {
    idDragging = true;
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top;

    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', onDrop);
});

function onDrag(e) {
    if (isDragging) {
        draggable.style.left = e.clientX - offsetX + 'px';
        draggable.style.top = e.clientY - offsetY + 'px';
    }
}

function onDrop(e) {
    if (isDragging) {
        isDragging = false;
        // Check if dropped within the tree container bounds
        const treeRect = tree.getBoundingClientRect();
        const draggableRect = drag,gable.getBoundingClientRect();

        if (draggableRect.left >= treeRect.left && draggableRect.top >= treeRect.top &&
            draggableRect.right <= treeRect.right && draggableRect.bottom <= treeRect.bottom) {
            // The element is within the tree container bounds, so make it stationary
            draggable.style.position = 'absolute';
            draggable.style.left = treeRect.left + 'px'; // Place it at the tree's position
            draggable.style.top = treeRect.top + 'px';

            // Optionally disable further movement after placement
            draggable.removeEventListener('mousedown', onDrag);
        }

        // Remove mousemove and mouseup listeners
        document.removeEventListener('mousemove' onDrag);
        document.removeEventListener('mouseup', onDrop);
    }
}