// scripts.js
document.getElementById('course-search').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const courses = document.querySelectorAll('.course-item');
    courses.forEach(course => {
        const courseTitle = course.querySelector('h3').innerText.toLowerCase();
        if (courseTitle.includes(searchQuery)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
});

document.getElementById('department-filter').addEventListener('change', function() {
    const filter = this.value;
    const courses = document.querySelectorAll('.course-item');
    courses.forEach(course => {
        const department = course.querySelector('p strong').innerText.toLowerCase();
        if (filter === 'all' || department.includes(filter)) {
            course.style.display = 'block';
        } else {
            course.style
