# Raghav Gupta's Portfolio

Welcome to my professional developer portfolio! This single-page web application showcases my skills, projects, education, and services as a Full Stack Developer and MCA student at Parul University. It’s designed to be visually appealing, responsive, and interactive, with a backend server to handle contact form submissions.

## Features

- **Hero Section with Typewriter Effect**: Displays a dynamic typewriter animation cycling through my roles (e.g., Full Stack Developer, MCA Student, Web Designer).
- **Smooth Scrolling Navigation**: Clicking navigation items smoothly scrolls to the corresponding sections, with an offset to account for the sticky navigation bar.
- **Responsive Design**: Fully responsive layout with tailored styles for different screen sizes (large, medium, small).
- **Skills Section**: Highlights my expertise in frontend, backend, databases, programming languages, and tools using styled capsules.
- **Services Section**: Showcases the services I offer, such as web design, frontend/backend development, and API integration.
- **Education Section**: Interactive education timeline with buttons to toggle between different academic milestones.
- **Projects Section**: Filterable project gallery showcasing my work in full-stack development, AI integration, and healthcare.
- **Contact Form with Server Integration**: A functional contact form that sends messages to my email via a Node.js/Express backend.

## Technologies Used

### Frontend

- **HTML5**: Structure of the portfolio.
- **CSS3**: Styling with responsive design, animations, and gradients.
- **JavaScript**: Interactivity, including typewriter effect, smooth scrolling, and form submission.
- **Font Awesome**: Icons for skills, services, and contact details.
- **Google Fonts**: Custom fonts (Pacifico, Caveat, Kalam, Delius) for typography.

### Backend

- **Node.js/Express**: Server to handle contact form submissions.
- **Nodemailer**: Library to send emails from the server.
- **Environment Variables**: Secure storage of email credentials using `dotenv`.

## Project Structure

```
portfolio/
├── index.html        # Main HTML file
├── styles.css        # CSS styles for the portfolio
├── script.js         # JavaScript for interactivity
├── server/
│   ├── server.js     # Node.js/Express server
│   └── .env          # Environment variables (not included in version control)
├── avatar.jpg        # Avatar image (placeholder)
├── background.jpg    # Background image for hero section (placeholder)
└── README.md         # Project documentation
```

## Server Implementation

The backend server is implemented using Node.js and Express to handle the contact form submission. When a user submits the form, the frontend sends a `POST` request to `/send-email`, and the server uses `nodemailer` to send an email to my address (`raghavgupta0741@gmail.com`).

## Setup Instructions

### Prerequisites

- **Node.js**: Install Node.js (v14 or higher) from [nodejs.org](https://nodejs.org/).
- **Git**: For cloning the repository.
- A Gmail account for sending emails via Nodemailer.

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Prime4045/Portfolio.git
   cd portfolio
   ```

2. **Set Up the Frontend**

   - Ensure `index.html`, `styles.css`, and `script.js` are in the root directory.
   - Add `avatar.jpg` and `background.jpg` to the root directory (or update the paths in `index.html` and `styles.css`).

3. **Set Up the Backend**

   - Install dependencies:
     ```bash
     npm init -y
     npm install express nodemailer dotenv
     ```
   - Create a `.env` file in the `server/` directory with your email credentials (see above).

4. **Run the Server**

   - From the `server/` directory:
     ```bash
     node server.js
     ```
   - The server will run on `http://localhost:3000`.

5. **View the Portfolio**
   - Open `http://localhost:3000` in your browser to see the portfolio.
   - Test the contact form by submitting a message—it should send an email to the address specified in `server.js`.

## Usage

- **Navigation**: Click the navigation links (Home, About, Services, Education, Projects, Contact) to smoothly scroll to each section.
- **Typewriter Effect**: On the hero section, watch the typewriter effect cycle through my roles.
- **Avatar Animation**: The avatar image floats with a gradient border animation.
- **Contact Form**: Fill out the form and submit—it will send an email to `raghavgupta0741@gmail.com`.

## Contact

- **Email**: [raghavgupta0741@gmail.com](mailto:raghavgupta0741@gmail.com)
- **LinkedIn**: [Raghav Gupta](https://www.linkedin.com/in/raghav-gupta-9506b2244/)
- **GitHub**: [Prime4045](https://github.com/Prime4045/)
- **Portfolio**: [Live Portfolio](https://portfolio-one-ebon-55.vercel.app/)

---

© 2025 Raghav Gupta. All Rights Reserved.
