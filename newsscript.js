// Sample data for news and events (this can be fetched from a server in a real implementation)
const newsData = [
    { title: "New Semester Begins", date: "2024-08-01", description: "The new semester has officially started. Check out the schedule for upcoming events and deadlines." },
    { title: "Library Renovation", date: "2024-08-05", description: "The library will be closed for renovations from Aug 5th to Aug 20th." },
    { title: "Sports Day Announced", date: "2024-08-10", description: "Join us for the annual Sports Day on Aug 10th." }
];

const eventsData = [
    { title: "Orientation Day", date: "2024-08-02", description: "Orientation for new students will take place in the main auditorium." },
    { title: "Science Fair", date: "2024-08-12", description: "The annual Science Fair will showcase innovative projects from students." },
    { title: "Graduation Ceremony", date: "2024-08-15", description: "The graduation ceremony for the class of 2024 will be held on Aug 15th." }
];

// Function to display news
function displayNews() {
    const newsList = document.querySelector('.news-list ul');
    newsList.innerHTML = ''; // Clear the list

    newsData.forEach(news => {
        const li = document.createElement('li');
        li.className = 'news-item';
        li.innerHTML = `
            <h3>${news.title}</h3>
            <p>${news.date}</p>
            <p>${news.description}</p>
        `;
        newsList.appendChild(li);
    });
}

// Function to display events
function displayEvents() {
    const eventsList = document.querySelector('.events-list ul');
    eventsList.innerHTML = ''; // Clear the list

    eventsData.forEach(event => {
        const li = document.createElement('li');
        li.className = 'event-item';
        li.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.date}</p>
            <p>${event.description}</p>
        `;
        eventsList.appendChild(li);
    });
}

// Calendar functionality
function displayCalendar() {
    const daysContainer = document.querySelector('.days');
    daysContainer.innerHTML = ''; // Clear existing days

    // Assume a 31-day month for simplicity
    for (let day = 1; day <= 31; day++) {
        const li = document.createElement('li');
        li.innerText = day;
        // Check if there are events on this day
        const event = eventsData.find(event => new Date(event.date).getDate() === day);
        if (event) {
            li.classList.add('event');
            li.title = event.title; // Tooltip with event title
        }
        daysContainer.appendChild(li);
    }
}

// Filter news and events by date or category (if applicable)
function filterByDate(date) {
    const filteredNews = newsData.filter(news => news.date === date);
    const filteredEvents = eventsData.filter(event => event.date === date);

    displayNews(filteredNews);
    displayEvents(filteredEvents);
}

// Load content when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayNews();
    displayEvents();
    displayCalendar();
});

// Example of filtering by date
document.querySelector('.filter-date').addEventListener('change', function() {
    filterByDate(this.value);
});
