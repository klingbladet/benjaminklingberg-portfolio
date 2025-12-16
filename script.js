// JSON SYNK TILL WORK / EDUCATION

const companyIconSvg = `
    <svg class="mr-1 inline-block" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33331 1.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331ZM4.66665 2.5H5.99998V3.5H4.66665V2.5ZM7.33331 2.5H8.66665V3.5H7.33331V2.5ZM9.99998 2.5H11.3333V3.5H9.99998V2.5ZM4.66665 4.5H5.99998V5.5H4.66665V4.5ZM7.33331 4.5H8.66665V5.5H7.33331V4.5ZM9.99998 4.5H11.3333V5.5H9.99998V4.5ZM4.66665 6.5H5.99998V7.5H4.66665V6.5ZM7.33331 6.5H8.66665V7.5H7.33331V6.5ZM9.99998 6.5H11.3333V7.5H9.99998V6.5ZM4.66665 8.5H5.99998V9.5H4.66665V8.5ZM9.99998 8.5H11.3333V9.5H9.99998V8.5Z" fill="#A7A7A7" />
    </svg>
`;

const locationIconSvg = `
    <svg class="mr-1 inline-block" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 6.75C7.50555 6.75 7.0222 6.64003 6.61108 6.43401C6.19995 6.22798 5.87952 5.93514 5.6903 5.59253C5.50108 5.24992 5.45157 4.87292 5.54804 4.50921C5.6445 4.14549 5.8826 3.8114 6.23223 3.54918C6.58187 3.28695 7.02732 3.10838 7.51228 3.03603C7.99723 2.96368 8.4999 3.00081 8.95671 3.14273C9.41353 3.28464 9.80397 3.52496 10.0787 3.83331C10.3534 4.14165 10.5 4.50416 10.5 4.875C10.4992 5.3721 10.2356 5.84867 9.76689 6.20017C9.29822 6.55167 8.6628 6.74941 8 6.75ZM8 3.75C7.70333 3.75 7.41332 3.81598 7.16665 3.9396C6.91997 4.06321 6.72771 4.23892 6.61418 4.44448C6.50065 4.65005 6.47095 4.87625 6.52882 5.09448C6.5867 5.31271 6.72956 5.51316 6.93934 5.6705C7.14912 5.82783 7.41639 5.93498 7.70737 5.97838C7.99834 6.02179 8.29994 5.99951 8.57403 5.91437C8.84812 5.82922 9.08238 5.68502 9.24721 5.50002C9.41203 5.31501 9.5 5.09751 9.5 4.875C9.4996 4.57672 9.34144 4.29075 9.06022 4.07983C8.779 3.86892 8.3977 3.7503 8 3.75Z" fill="#A7A7A7" />
      <path d="M8.00001 11.25L3.78201 7.51912C3.7234 7.4631 3.66539 7.40673 3.60801 7.35C2.8875 6.63817 2.49826 5.76871 2.50001 4.875C2.50001 3.78098 3.07947 2.73177 4.11092 1.95818C5.14237 1.1846 6.54132 0.75 8.00001 0.75C9.4587 0.75 10.8576 1.1846 11.8891 1.95818C12.9205 2.73177 13.5 3.78098 13.5 4.875C13.5018 5.7683 13.1127 6.63737 12.3925 7.34888L12.392 7.35C12.392 7.35 12.242 7.49775 12.2195 7.51763L8.00001 11.25ZM4.40601 6.89813C4.40701 6.89813 4.52301 7.01362 4.54951 7.03837L8.00001 10.0905L11.455 7.03425C11.477 7.01362 11.594 6.89738 11.5945 6.897C12.1831 6.31542 12.5012 5.60514 12.5 4.875C12.5 3.97989 12.0259 3.12145 11.182 2.48851C10.3381 1.85558 9.19348 1.5 8.00001 1.5C6.80653 1.5 5.66194 1.85558 4.81803 2.48851C3.97411 3.12145 3.50001 3.97989 3.50001 4.875C3.49896 5.60559 3.81739 6.31628 4.40651 6.89813H4.40601Z" fill="#A7A7A7" />
    </svg>
`;

function createWorkEntry(work, index) {
  const columnOne = document.createElement('div');
  columnOne.className = 'work-experience-column-one';

  const rowOne = document.createElement('div');
  rowOne.className = 'work-experience-row';

  const title = document.createElement('p');
  title.className = 'work-title';
  title.textContent = work.job;

  const time = document.createElement('p');
  time.className = 'time';
  time.textContent = work.time;

  rowOne.appendChild(title);
  rowOne.appendChild(time);

  const rowTwo = document.createElement('div');
  rowTwo.className = 'work-experience-row-two';

  const workDetails = document.createElement('div');
  workDetails.className = 'work';

  const companySpan = document.createElement('span');
  companySpan.className = 'company';
  companySpan.innerHTML = companyIconSvg + work.company;

  const locationSpan = document.createElement('span');
  locationSpan.className = 'location';
  locationSpan.innerHTML = locationIconSvg + work.location;

  workDetails.appendChild(companySpan);
  workDetails.appendChild(locationSpan);

  const duration = document.createElement('p');
  duration.className = 'date-pg';
  duration.textContent = work.duration;

  rowTwo.appendChild(workDetails);
  rowTwo.appendChild(duration);

  columnOne.appendChild(rowOne);
  columnOne.appendChild(rowTwo);

  // SKAPA DESCRIPTION CONTAINER

  const descriptionContainer = document.createElement('div');
  descriptionContainer.className = 'description-container';
  descriptionContainer.id = `description-${index}`;

  const description = document.createElement('p');
  description.className = 'description';
  description.textContent = work.description;

  descriptionContainer.appendChild(description);
  columnOne.appendChild(descriptionContainer);

  // SKAPA TOGGLE BUTTON

  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'toggle-description-btn';
  toggleBtn.textContent = '↓';
  toggleBtn.dataset.index = index;
  
  toggleBtn.addEventListener('click', function() {
    const isShowing = descriptionContainer.classList.contains('show');
    descriptionContainer.classList.toggle('show');
    this.textContent = isShowing ? '↓' : '↑';
  });

  columnOne.appendChild(toggleBtn);

  return columnOne;
}

function createEducationEntry(education) {
  const columnOne = document.createElement('div');
  columnOne.className = 'work-experience-column-one'; 

  const rowOne = document.createElement('div');
  rowOne.className = 'work-experience-row';

  const title = document.createElement('p');
  title.className = 'work-title';
  title.textContent = education.degree;

  const time = document.createElement('p');
  time.className = 'time';
  time.textContent = education.time;

  rowOne.appendChild(title);
  rowOne.appendChild(time);

  const rowTwo = document.createElement('div');
  rowTwo.className = 'work-experience-row-two';

  const workDetails = document.createElement('div');
  workDetails.className = 'work';

  const companySpan = document.createElement('span');
  companySpan.className = 'company';
  companySpan.innerHTML = companyIconSvg + education.School;

  const locationSpan = document.createElement('span');
  locationSpan.className = 'location';
  locationSpan.innerHTML = locationIconSvg + education.location;

  workDetails.appendChild(companySpan);
  workDetails.appendChild(locationSpan);

  const duration = document.createElement('p');
  duration.className = 'date-pg'; 
  duration.textContent = education.duration;

  rowTwo.appendChild(workDetails);
  rowTwo.appendChild(duration);

  columnOne.appendChild(rowOne);
  columnOne.appendChild(rowTwo);

  return columnOne;
}

async function renderCV() {
  const containers = document.querySelectorAll('#work-experience-container, #education-container');

  if (containers.length === 0) {
      console.error("No CV containers found. Ensure IDs #work-experience-container and #education-container exist.");
      return;
  }

  containers.forEach(container => {
    container.innerHTML = `<h2>Loading ${container.id.includes('work') ? 'Work' : 'Education'} History...</h2>`;
  });

  try {
    const response = await fetch("./cv.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const workContainer = document.getElementById('work-experience-container');
    const workData = data.work; 

    if (workContainer) {
        workContainer.innerHTML = '';
        if (workData && workData.length > 0) {
            workData.forEach((work, index) => {
                const entry = createWorkEntry(work, index);
                workContainer.appendChild(entry);
            });
        } else {
            workContainer.innerHTML = '<p style="color: gray;">No work experience entries found.</p>';
        }
    }
    
    const educationContainer = document.getElementById('education-container');
    const educationData = data.education; 
    
    if (educationContainer) {
        educationContainer.innerHTML = ''; 
        if (educationData && educationData.length > 0) {
            educationData.forEach(edu => {
                const entry = createEducationEntry(edu);
                educationContainer.appendChild(entry);
            });
        } else {
            educationContainer.innerHTML = '<p style="color: gray;">No education entries found.</p>';
        }
    }

  } catch (error) {
    console.error("Error", error);
    containers.forEach(container => {
            container.innerHTML = `<p style="color: red;">Error loading data: ${error.message}. Check console.</p>`;
      });
  }
}

window.addEventListener('load', renderCV);

// VÄNTA TILLS DOMEN HAR LADDAT KLART

document.addEventListener('DOMContentLoaded', function() {
  
// THEME TOGGLE FUNKTIONALITET

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// LADDA SPARAT TEMA

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  if (themeToggle) themeToggle.checked = true;
}

// TOGGLE THEME

if (themeToggle) {
  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem("theme", "light");
    }
  });
}

// HAMBURGAR-MENY FUNKTIONALITET

const hamburgerImg = document.querySelector('.hamburger-icon');
const navOptions = document.querySelector('.nav-options');
const socialIcons = document.querySelector('.social-media-icons');

if (hamburgerImg && navOptions && socialIcons) {
  hamburgerImg.addEventListener('click', function(e) {
    e.preventDefault();
    navOptions.classList.toggle('active');
    socialIcons.classList.toggle('active');
    hamburgerImg.classList.toggle('active');
  });

  // Close menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav-options a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navOptions.classList.remove('active');
      socialIcons.classList.remove('active');
      hamburgerImg.classList.remove('active');
    });
  });
}
});

// SKROLL-EFFEKT

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

function observeElements() {
  const hiddenElements = document.querySelectorAll('.project-box, .home-page, .projects-header, .about-me, .contact-page');
  hiddenElements.forEach((el) => observer.observe(el));
}

// FETCH GITHUB-REPOS

async function loadGitHubRepos() {
  const repoContainer = document.getElementById("repos");

  repoContainer.innerHTML = '<p id="loading-message">Loading GitHub-projects...</p>'

  try {
    const response = await fetch("https://api.github.com/users/klingbladet/repos");
    if (!response.ok) throw new Error("GitHub API request failed");
    const repos = await response.json();

    repoContainer.innerHTML = '';

    const publicRepos = repos
      .filter(repo => !repo.fork)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    // SPLITTA REPOS TILL 2 OCH KVARSTÅENDE (FÖR GRID LAYOUT)

    const firstTwoRepos = publicRepos.slice(0, 2);
    const remainingRepos = publicRepos.slice(2);

    // SKAPA HTML FÖR FÖRSTA 2 REPOS (ALLTID SYNLIGA I PROJECTS-GRID)
    const firstTwoHTML = firstTwoRepos.map(repo => `
      <article class="project-box">
        <div class="project-information">
          <img class="project-image" src="img/projects/${repo.name}.png" alt="${repo.name}">
          <div class="project-text">
            <h3>${repo.name}</h3>
            <p class="project-paragraph">${repo.description || "No description provided."}</p>
            <p class="project-tech-stack-paragraph">
              Tech stack: <span style="font-size: 14px;">${repo.language || "N/A"}</span>
            </p>
          </div>
          <div class="projects-column">
            <div>
              <img src="img/projects/link-icon.svg" alt="link icon">
              <a id="project-link"href="${repo.homepage || repo.html_url}" target="_blank">Live Preview</a>
            </div>
            <div>
              <img src="img/projects/github-icon.svg" alt="github icon">
              <a id="project-link"href="${repo.html_url}" target="_blank">View code</a>
            </div>
          </div>
        </div>
      </article>
    `).join("");

    // LÄGG TILL FÖRSTA 2 REPOS TILL MAIN-CONTAINER
    repoContainer.innerHTML += firstTwoHTML;

    // IFALL DET ÄR FLER REPOS, LÄGG TILL DOM FÖR SHOW-PROJECTS CONTAINER
    if (remainingRepos.length > 0) {
      const showProjectsContainer = document.querySelector('.show-projects');
      
      const remainingHTML = remainingRepos.map(repo => `
        <article class="project-box">
          <div class="project-information">
            <img class="project-image" src="img/projects/${repo.name}.png" alt="${repo.name}">
            <div class="project-text">
              <h3>${repo.name}</h3>
              <p class="project-paragraph">${repo.description || "No description provided."}</p>
              <p class="project-tech-stack-paragraph">
                Tech stack: <span style="font-size: 14px;">${repo.language || "N/A"}</span>
              </p>
            </div>
            <div class="projects-column">
              <div>
                <img src="img/projects/link-icon.svg" alt="link icon">
                <a id="project-link"href="${repo.homepage || repo.html_url}" target="_blank">Live Preview</a>
              </div>
              <div>
                <img src="img/projects/github-icon.svg" alt="github icon">
                <a id="project-link" href="${repo.html_url}" target="_blank">View code</a>
              </div>
            </div>
          </div>
        </article>
      `).join("");

      showProjectsContainer.innerHTML = remainingHTML;

      // LÄGG TILL SHOW/HIDE BUTTONS EFTER CONTENT ÄR INLADDAT
      setupProjectToggle();
    } else {
      // GÖM BUTTONS IFALL DET ÄR 2 ELLER FÄRRE REPOS
      const closeOpenBtn = document.querySelector('.close-open-btn');
      if (closeOpenBtn) closeOpenBtn.style.display = 'none';
    }

    // RE-RUN OBSERVER EFTER REPOS ÄR TILLAGDA
    observeElements();

  } catch (error) {
    console.error("Error loading repos:", error);
    repoContainer.innerHTML += `<p>Failed to load GitHub repositories 😢</p>`;
  }
}

// LÄGG UPP PROJECT TOGGLE FUNKTIONALITET
function setupProjectToggle() {
  const openProjectsBtn = document.getElementById("open-projects");
  const projectsContainer = document.querySelector(".show-projects");
  const closeProjectsBtn = document.getElementById("close-projects");

  console.log("Setting up toggle buttons...");
  console.log("Open button:", openProjectsBtn);
  console.log("Close button:", closeProjectsBtn);
  console.log("Container:", projectsContainer);

  if (openProjectsBtn && projectsContainer && closeProjectsBtn) {
    // TA BORT EXISTERANDE EVENT-LISTENERS GENOM ATT KLONA OCH BYTA
    const newOpenBtn = openProjectsBtn.cloneNode(true);
    const newCloseBtn = closeProjectsBtn.cloneNode(true);
    openProjectsBtn.parentNode.replaceChild(newOpenBtn, openProjectsBtn);
    closeProjectsBtn.parentNode.replaceChild(newCloseBtn, closeProjectsBtn);

    function openProjects() {
      console.log("Opening projects...");
      projectsContainer.classList.add("show");
      newOpenBtn.style.display = "none";
      newCloseBtn.style.display = "block";
    }

    function closeProjects() {
      console.log("Closing projects...");
      projectsContainer.classList.remove("show");
      newOpenBtn.style.display = "block";
      newCloseBtn.style.display = "none";
    }

    newOpenBtn.addEventListener("click", openProjects);
    newCloseBtn.addEventListener("click", closeProjects);

    // INITIELLA STATUS
    newCloseBtn.style.display = "none";
    console.log("Toggle setup complete!");
  } else {
    console.error("Could not find all required elements for toggle");
  }
}

// INIT
document.addEventListener("DOMContentLoaded", () => {
  observeElements();
  loadGitHubRepos();
  
  // DEBUG: CONSOLE.LOG ALLA ELEMENT PÅ PAGE LOAD
  console.log("=== PAGE LOADED - DEBUGGING ===");
  console.log("repos container:", document.getElementById("repos"));
  console.log("show-projects container:", document.querySelector(".show-projects"));
  console.log("open button:", document.getElementById("open-projects"));
  console.log("close button:", document.getElementById("close-projects"));
  console.log("close-open-btn div:", document.querySelector(".close-open-btn"));
});