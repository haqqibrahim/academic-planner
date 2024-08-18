document.addEventListener('DOMContentLoaded', function () {
    // Modal elements
    const modal = document.getElementById('modal');
    const closeModalBtn = document.querySelector('.close');
    const addItemForm = document.getElementById('addItemForm');

    // Open modal to add a new item
    window.addNewItem = function (listId) {
        addItemForm.setAttribute('data-list-id', listId);
        modal.style.display = 'block';
    };

    // Close the modal
    window.closeModal = function () {
        modal.style.display = 'none';
        addItemForm.reset();
    };

    // Save the new item
    window.saveNewItem = function (event) {
        event.preventDefault();
        const listId = addItemForm.getAttribute('data-list-id');
        const itemType = document.getElementById('itemType').value;
        const itemName = document.getElementById('itemName').value;
        const itemDate = document.getElementById('itemDate').value;

        const newItem = document.createElement('li');
        let iconClass = '';

        switch (itemType) {
            case 'exam':
                iconClass = 'fas fa-calendar-alt';
                newItem.innerHTML = `<i class="${iconClass}"></i> ${itemName} - ${itemDate}`;
                break;
            case 'assignment':
                iconClass = 'fas fa-calendar-check';
                newItem.innerHTML = `<i class="${iconClass}"></i> ${itemName} - ${itemDate}`;
                break;
            case 'task':
                iconClass = 'fas fa-tasks';
                newItem.innerHTML = `<i class="${iconClass}"></i> ${itemName}`;
                break;
        }

        document.querySelector(`.${listId}`).appendChild(newItem);
        closeModal();
    };

    // Update progress functionality
    window.updateProgress = function () {
        const currentProgressElement = document.getElementById('current-progress');
        const targetProgressElement = document.getElementById('target-progress');

        let currentProgress = parseInt(currentProgressElement.textContent.replace('%', ''));
        let targetProgress = parseInt(targetProgressElement.textContent.replace('%', ''));

        if (currentProgress < targetProgress) {
            currentProgress += 5; // Increment progress by 5%
            if (currentProgress > targetProgress) {
                currentProgress = targetProgress;
            }
            currentProgressElement.textContent = currentProgress + '%';
        } else {
            alert('You have already reached or exceeded your target progress!');
        }
    };

    // Close the modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    };

    // Initial progress setting
    document.getElementById('current-progress').textContent = '75%';
    document.getElementById('target-progress').textContent = '90%';
});
