// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Load content dynamically based on the page
    const mainContent = document.querySelector('.content');
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'index.html' || currentPage === '') {
        loadHomePage(mainContent);
    } else if (currentPage === 'courses.html') {
        loadCoursesPage(mainContent);
    } else if (currentPage === 'results.html') {
        loadResultsPage(mainContent);
    } else if (currentPage === 'news.html') {
        loadNewsPage(mainContent);
    }
});

function loadHomePage(mainContent) {
    mainContent.innerHTML = `
        <section class="home-section">
            <h1>Welcome to Chrisland University Portal</h1>
            <p>Your one-stop solution for managing your academic journey.</p>
        </section>
    `;
}

function loadCoursesPage(mainContent) {
    // Load the courses content (HTML content from the provided courses code)
}

function loadResultsPage(mainContent) {
    mainContent.innerHTML = `
        <section class="results-section">
            <h1>My Results</h1>
            <!-- Results Table Here -->
            <div id="forecaster-section">
                <!-- Forecaster Section Content -->
            </div>
        </section>
    `;
}

function loadNewsPage(mainContent) {
    // Load the news content (HTML content from the provided news code)
}
