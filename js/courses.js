
const courses = [
    [
        'Data Analytics with Generative AI',
        'Analyze data and build interactive dashboards using Python, SQL, Power BI and Excel. Use Generative AI to automate analysis and improve business decisions.',
        'hero-data-analytics.png',
        'Data Analytics & GenAI',
        '3–6 Months',
        'Beginner → Advanced'
    ],
     [
        'MERN Stack Development with Generative AI',
        'Build modern, responsive web applications using MongoDB, Express.js, React.js and Node.js through practical projects.',
        'hero-learning.jpg',
        'Web Development',
        '3–6 Months',
        'Beginner → Advanced'
    ],
    [
        'Java Full Stack',
        'Learn Java, Spring Boot, SQL, REST APIs and frontend development through hands-on projects.',
        'classroom-3.jpg',
        'Programming',
        '3–6 Months',
        'Beginner → Advanced'
    ],
    [
        'Python Programming',
        'Learn Python fundamentals, object-oriented programming, APIs, automation and practical application development.',
        'students-2.jpg',
        'Programming',
        '2–4 Months',
        'Beginner → Intermediate'
    ],
    
[
    'Python Full Stack Development',
    'Learn Python programming, database management and REST API integration. Build dynamic web applications using Python, Django, Flask, HTML, CSS, JavaScript, React.js and SQL/MySQL.',
    'hero-python-fullstack.png',
    'Python Full Stack',
    '3–6 Months',
    'Beginner → Advanced'
],


   
[
    'Data Science with AI & Machine Learning',
    'Learn Python, statistics, data analysis,Artificial Intelligence and Machine Learning.explore Generative AI, work with real-world datasets and develop practical AI-powered applications and data science projects.',
   'students-3.jpg',
    'Data Science & AI/ML',
    '4–6 Months',
    'Beginner → Advanced'
],

     

    [
        'Cloud & DevOps',
        'Learn Linux, Git, Docker, CI/CD pipelines and cloud deployment fundamentals through practical exercises.',
        'lab-1.jpg',
        'Cloud & DevOps',
        '3–5 Months',
        'Beginner → Intermediate'
    ],

    [
        'Software Testing',
        'Learn manual testing, test case design, API testing, automation fundamentals and modern quality assurance workflows.',
        'lab-2.jpg',
        'Testing',
        '2–4 Months',
        'Beginner → Intermediate'
    ],

    [
        'UI/UX Design',
        'Learn user research, wireframing, prototyping, design systems and portfolio development using modern design tools.',
        'lab-3.jpg',
        'Design',
        '2–4 Months',
        'Beginner'
    ],

    [
        'AI & Generative AI',
        'Explore artificial intelligence, large language models, prompt engineering and practical Generative AI applications.',
        'internship.jpg',
        'Data & AI',
        '2–4 Months',
        'Beginner → Intermediate'
    ],

    [
        'SQL & Data Analytics',
        'Master SQL queries, spreadsheets, data cleaning, reporting and dashboard fundamentals to solve business problems.',
        'blog-1.jpg',
        'Data & AI',
        '2–4 Months',
        'Beginner → Intermediate'
    ]
];


// =========================================================
// COURSE GRID
// =========================================================

const grid = document.querySelector('#courseGrid');

function render(list) {
    if (!grid) return;

    grid.innerHTML = list.map((course) => {
        const [
            title,
            description,
            image,
            courseCategory,
            duration,
            level
        ] = course;

        return `
            <article class="card reveal show">

                <img
                    class="course-img"
                    src="assets/images/${image}"
                    alt="${title} course at Million Technology"
                    loading="lazy"
                >

                <div class="card-body">

                    <span class="pill">
                        ${courseCategory}
                    </span>

                    <h3>${title}</h3>

                    <p class="muted">
                        ${description}
                    </p>

                    <div class="meta">
                        <span class="pill">
                            ${duration}
                        </span>

                        <span class="pill">
                            ${level}
                        </span>
                    </div>

                    <a
                        class="card-link"
                        href="course-details.html?course=${encodeURIComponent(title)}"
                    >
                        View Course
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>

                </div>
            </article>
        `;
    }).join('');
}


// =========================================================
// SEARCH & CATEGORY FILTER
// =========================================================

const search = document.querySelector('#courseSearch');
const category = document.querySelector('#courseCategory');

function filterCourses() {
    const searchText = (search?.value || '')
        .trim()
        .toLowerCase();

    const selectedCategory = category?.value || 'All';

    const filteredCourses = courses.filter((course) => {
        const title = course[0].toLowerCase();
        const description = course[1].toLowerCase();
        const courseCategory = course[3].toLowerCase();

        const matchesSearch =
            title.includes(searchText) ||
            description.includes(searchText) ||
            courseCategory.includes(searchText);

        const matchesCategory =
            selectedCategory === 'All' ||
            course[3] === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    render(filteredCourses);
}


// =========================================================
// EVENT LISTENERS
// =========================================================

search?.addEventListener('input', filterCourses);

category?.addEventListener('change', filterCourses);


// =========================================================
// INITIAL RENDER
// =========================================================

render(courses);