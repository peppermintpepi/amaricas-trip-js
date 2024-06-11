document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    let isDropdownOpen = false;

    dropdown.addEventListener('mouseover', function() {
        dropdownContent.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', function() {
        if (!isDropdownOpen) {
            dropdownContent.style.display = 'none';
        }
    });

    dropdown.addEventListener('click', function(e) {
        isDropdownOpen = !isDropdownOpen;
        dropdownContent.style.display = isDropdownOpen ? 'block' : 'none';
        e.stopPropagation();
    });

    window.addEventListener('click', function() {
        if (isDropdownOpen) {
            dropdownContent.style.display = 'none';
            isDropdownOpen = false;
        }
    });

    dropdownContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
