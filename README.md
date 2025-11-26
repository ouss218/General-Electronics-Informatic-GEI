
**General Electronics Informatic (GEI) Website**

## 📖 Project Overview

This project involved the design and development of a professional online presence for GEI. The website serves as a digital showcase for the company's extensive range of services, including IT consulting, hardware sales, network installation/maintenance, and a suite of proprietary management software (e.g., GeiLab for medical labs, GeiPers for HR, GeiStock for inventory).

The primary goal was to enhance GEI's visibility, improve client communication, and present its services effectively through a clean, user-friendly, and accessible platform.

## ✨ Features

- **Modern & Responsive Design**: Fully responsive layout that works seamlessly on desktops, tablets, and mobile devices.
- **Interactive Animations**: Utilizes GSAP ScrollTrigger and Animate.css for engaging scroll-based and entrance animations.
- **Dynamic Service Catalog**: Animated presentation of services and software solutions.
- **Functional Contact Form**: A contact form with server-side processing using Node.js and Express.js.
- **Technical Sheet Downloads**: Allows visitors to download PDF technical sheets for each software product.
- **SEO Optimized**: Built with search engine optimization best practices in mind.

## 🛠️ Tech Stack & Tools

### Frontend
- **HTML5**: For semantic structure.
- **CSS3**: For styling and layout, including Flexbox/Grid.
- **JavaScript (Vanilla)**: For DOM manipulation and custom interactivity.
- **GSAP (GreenSock Animation Platform)**: For advanced scroll-based animations.
- **Animate.css**: For pre-built CSS animations.

### Backend & Development
- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Web framework for handling routes and middleware.
- **Nodemailer**: For processing and sending emails from the contact form.
- **Visual Studio Code**: Primary code editor.
- **Tumult Hype 4**: Used for creating the interactive logo animation.
- **Lunacy**: Used for UI/UX prototyping and design.


## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- A code editor like VS Code.
- Node.js and npm installed on your machine (required for the contact form functionality).

### Installation & Local Development

1.  **Clone the repository**
    ```bash
    git clone origin https://github.com/ouss218/General-Electronics-Informatic-GEI.git
    cd gei-showcase-website
    ```

2.  **Install Dependencies** (for the backend server)
    Navigate to the server directory and run:
    ```bash
    cd src/server
    npm install
    ```

3.  **Start the Development Server**
    From the server directory, run:
    ```bash
    node server.js
    ```
    The site should now be running on `http://localhost:3000` (or another specified port).

    *For frontend-only development (without the contact form functionality), you can simply open the `index.html` file in your browser.*

