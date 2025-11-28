<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">🎓 Kambaz Learning Management System</h3>

  <p align="center">
    Modern, full-stack Learning Management System built with Next.js, React, and Redux. Features comprehensive course management, interactive learning modules, real-time updates, and seamless user experience for students and educators.
    <br />
    <a href="https://github.com/virtual457/kambaz-next-js"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://kambaz-next-js-git-a5-chandan-gowda-k-ss-projects.vercel.app">View Live Demo</a>
    ·
    <a href="https://kambaz-node-server-app-irwy.onrender.com/api/courses">View API</a>
    ·
    <a href="https://github.com/virtual457/kambaz-next-js/issues">Report Bug</a>
    ·
    <a href="https://github.com/virtual457/kambaz-next-js/issues">Request Feature</a>
  </p>
</div>

<!-- LIVE DEMO SECTION -->
## 🚀 Live Demo

### Frontend Application (Vercel)

<div align="center">

[![Deployment Status](https://img.shields.io/badge/Vercel-Live-brightgreen?style=for-the-badge&logo=vercel)](https://kambaz-next-js-git-a5-chandan-gowda-k-ss-projects.vercel.app)

**Live App:** [https://kambaz-next-js-git-a5-chandan-gowda-k-ss-projects.vercel.app](https://kambaz-next-js-git-a5-chandan-gowda-k-ss-projects.vercel.app)

</div>

**Try it out:**
- [Dashboard](https://kambaz-next-js-git-a5-chandan-gowda-k-ss-projects.vercel.app/Dashboard) - Browse courses and manage enrollments
- [Sign In](https://kambaz-next-js-git-a5-chandan-gowda-k-ss-projects.vercel.app/Account/Signin) - Test with credentials: `iron_man` / `stark123`
- [Sample Course](https://kambaz-next-js-git-a5-chandan-gowda-k-ss-projects.vercel.app/Courses/1234/Home) - Explore course content

### Backend API (Render)

<div align="center">

[![API Status](https://img.shields.io/website?url=https%3A%2F%2Fkambaz-node-server-app-irwy.onrender.com%2Fhello&style=for-the-badge&label=API%20STATUS)](https://kambaz-node-server-app-irwy.onrender.com/hello)

**API Base URL:** [https://kambaz-node-server-app-irwy.onrender.com](https://kambaz-node-server-app-irwy.onrender.com)

</div>

### Full Stack Architecture
```
┌──────────────────────┐      HTTPS/REST      ┌──────────────────────┐
│   Next.js Frontend   │ ←─────────────────→  │   Node.js Backend    │
│   React + Redux      │      API Calls       │   Express + REST     │
│   Vercel Hosting     │                      │   Render Hosting     │
└──────────────────────┘                      └──────────────────────┘
```

**Tech Stack:**  
Frontend: Next.js 15, React 19, TypeScript, Redux Toolkit, Bootstrap, Tailwind  
Backend: Node.js, Express, RESTful APIs, CORS  
Deployment: Vercel (Frontend) + Render (Backend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#architecture">Architecture</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

Kambaz is a comprehensive Learning Management System (LMS) designed to streamline education delivery and enhance the learning experience. Built with modern web technologies, it provides a robust platform for course management, content delivery, student engagement, and administrative oversight.

The application features a responsive, intuitive interface that works seamlessly across devices, real-time data synchronization with the backend, and a modular architecture that makes it easy to extend and customize. Whether you're an educator managing courses or a student engaging with content, Kambaz provides a smooth, efficient experience.

### Why Kambaz?

Traditional learning platforms often suffer from poor user experience, limited customization, and outdated technology. Kambaz addresses these challenges by:

- **Modern Tech Stack**: Built with Next.js 15 and React 19 for optimal performance
- **Responsive Design**: Beautiful UI that works on desktop, tablet, and mobile
- **Real-time Updates**: Instant synchronization across all connected clients
- **Intuitive Interface**: Clean, user-friendly design inspired by leading platforms
- **Scalable Architecture**: Designed to grow from small classes to large institutions
- **Developer Friendly**: Well-documented, maintainable codebase

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Key Features

#### For Students
- 📚 **Course Dashboard**: Browse and enroll in available courses
- 📖 **Learning Modules**: Organized, hierarchical course content
- 📝 **Assignment Management**: View, submit, and track assignments
- 👤 **User Profile**: Manage personal information and preferences
- 🎯 **Progress Tracking**: Monitor learning progress and grades
- 🔔 **Notifications**: Stay updated on course activities

#### For Educators
- ➕ **Course Creation**: Easily create and manage courses
- 📑 **Content Organization**: Structure content with modules and lessons
- ✍️ **Assignment Distribution**: Create and manage student assignments
- 👥 **Enrollment Management**: Control who can access courses
- 📊 **Student Oversight**: View enrolled students and their progress
- ⚙️ **Flexible Configuration**: Customize course settings and parameters

#### Technical Features
- **Server-Side Rendering**: Fast initial page loads with Next.js SSR
- **State Management**: Redux Toolkit for predictable state updates
- **RESTful Integration**: Clean API communication with backend
- **Form Validation**: Client-side validation for better UX
- **Error Handling**: Graceful error recovery and user feedback
- **Responsive Layout**: Bootstrap-based responsive design
- **Route Protection**: Secure access control for authenticated routes
- **Optimistic Updates**: Instant UI feedback while syncing with server

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Next.js][Next.js]][Next-url] - React framework for production
* [![React][React.js]][React-url] - JavaScript library for building UIs
* [![TypeScript][TypeScript]][TypeScript-url] - Typed superset of JavaScript
* [![Redux][Redux]][Redux-url] - Predictable state container
* [![Bootstrap][Bootstrap]][Bootstrap-url] - CSS framework for responsive design
* [![Tailwind CSS][Tailwind]][Tailwind-url] - Utility-first CSS framework
* [![Vercel][Vercel]][Vercel-url] - Deployment and hosting platform
* **Axios** - Promise-based HTTP client
* **React Icons** - Popular icon packs as React components
* **React Bootstrap** - Bootstrap components for React

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* Node.js (v18.0.0 or higher)
  ```sh
  node --version
  ```
* npm (v8.0.0 or higher)
  ```sh
  npm --version
  ```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/virtual457/kambaz-next-js.git
   ```

2. Navigate to the project directory
   ```sh
   cd kambaz-next-js
   ```

3. Install dependencies
   ```sh
   npm install
   ```

4. Create environment configuration
   
   Create `.env.local` file:
   ```env
   NEXT_PUBLIC_HTTP_SERVER=http://localhost:4000
   ```

5. Start the backend server (required)
   ```sh
   # In another terminal, clone and start the backend
   git clone https://github.com/virtual457/kambaz-node-server-app.git
   cd kambaz-node-server-app
   npm install
   npm run dev
   ```

6. Start the frontend development server
   ```sh
   npm run dev
   ```

7. Open your browser
   ```
   http://localhost:3000
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->
## Usage

### Getting Started as a Student

1. **Create Account**
   - Navigate to Sign Up page
   - Fill in your information
   - Create your account

2. **Browse Courses**
   - View available courses on Dashboard
   - Click "All Courses" to see full catalog
   - Enroll in courses that interest you

3. **Access Course Content**
   - Navigate to enrolled courses
   - Browse modules and lessons
   - View and complete assignments

4. **Manage Profile**
   - Update personal information
   - Change password
   - View enrollment history

### Getting Started as an Educator

1. **Sign In**
   - Use demo credentials: `iron_man` / `stark123`
   - Access educator dashboard

2. **Create Course**
   - Click "Add" on Dashboard
   - Fill in course details
   - Publish course

3. **Organize Content**
   - Add modules to structure content
   - Create lessons within modules
   - Upload materials and resources

4. **Manage Assignments**
   - Create assignments with due dates
   - Set point values
   - Track submissions

5. **Monitor Students**
   - View enrolled students
   - Track progress
   - Manage enrollments

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->
## Features

### Dashboard
- Course catalog with search and filter
- Enrollment management
- Toggle between "My Courses" and "All Courses"
- Quick course creation
- Visual course cards with images

### Course Management
- Create, read, update, delete courses
- Course information (number, credits, dates, description)
- Course image customization
- Department organization

### Module System
- Hierarchical content organization
- Drag-and-drop reordering (planned)
- Lessons within modules
- Module descriptions and metadata
- Inline editing

### Assignment System
- Assignment creation with rich details
- Due date management
- Point allocation
- Availability windows
- Submission tracking (planned)

### User Management
- Secure authentication
- Profile management
- Role-based access (Student, Faculty, Admin)
- Session persistence
- Password management

### Enrollment System
- One-click enrollment
- Enrollment tracking
- Access control
- Bulk operations (planned)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ARCHITECTURE -->
## Architecture

### Project Structure
```
kambaz-next-js/
├── app/
│   ├── (Kambaz)/              # Main application
│   │   ├── Account/           # Authentication & user management
│   │   │   ├── Signin/
│   │   │   ├── Signup/
│   │   │   ├── Profile/
│   │   │   ├── client.ts      # API client
│   │   │   └── reducer.ts     # Redux state
│   │   ├── Dashboard/         # Course dashboard
│   │   ├── Courses/           # Course management
│   │   │   ├── [cid]/        # Dynamic course routes
│   │   │   │   ├── Home/
│   │   │   │   ├── Modules/
│   │   │   │   ├── Assignments/
│   │   │   │   ├── Grades/
│   │   │   │   └── People/
│   │   │   ├── client.ts
│   │   │   └── reducer.ts
│   │   ├── Database/          # Initial data (development)
│   │   ├── Enrollments/       # Enrollment management
│   │   └── store.ts          # Redux store configuration
│   ├── Labs/                  # Learning exercises & demos
│   │   ├── Lab1/             # HTML fundamentals
│   │   ├── Lab2/             # CSS & Bootstrap
│   │   ├── Lab3/             # JavaScript basics
│   │   ├── Lab4/             # React state management
│   │   └── Lab5/             # RESTful APIs
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── public/                    # Static assets
├── package.json
└── next.config.ts
```

### State Management
- **Redux Toolkit**: Centralized state management
- **Slice Pattern**: Domain-specific state slices
- **Async Actions**: Server synchronization
- **Optimistic Updates**: Instant UI feedback

### Routing
- **File-based Routing**: Next.js App Router
- **Dynamic Routes**: Course-specific pages
- **Nested Layouts**: Shared UI components
- **Protected Routes**: Authentication guards (planned)

### API Integration
- **Axios**: HTTP client for API calls
- **Environment Variables**: Configurable backend URL
- **Error Handling**: User-friendly error messages
- **Loading States**: Skeleton screens (planned)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEPLOYMENT -->
## Deployment

### Production Deployment on Vercel

**Live Application:** [https://kambaz-next-js-git-a5-chandan-gowda-k-ss-projects.vercel.app](https://kambaz-next-js-git-a5-chandan-gowda-k-ss-projects.vercel.app)

#### Deploy Your Own Instance

1. **Fork the repository**

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your forked repository

3. **Configure Environment Variables**
   ```
   NEXT_PUBLIC_HTTP_SERVER=https://your-backend-url.onrender.com
   ```

4. **Deploy**
   - Automatic deployments on git push
   - Preview deployments for pull requests
   - Production deployment from main branch

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Configuration

#### Development (`.env.local`)
```env
NEXT_PUBLIC_HTTP_SERVER=http://localhost:4000
```

#### Production (Vercel)
```env
NEXT_PUBLIC_HTTP_SERVER=https://kambaz-node-server-app-irwy.onrender.com
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

### Current Features
- [x] User authentication and session management
- [x] Course catalog and enrollment system
- [x] Module-based content organization
- [x] Assignment distribution and management
- [x] Responsive UI with Bootstrap and Tailwind
- [x] Redux state management
- [x] RESTful API integration
- [x] Production deployment on Vercel
- [x] Real-time data synchronization

### Upcoming Features
- [ ] **Database Integration**: MongoDB for persistent storage
- [ ] **File Uploads**: Support for course materials and submissions
- [ ] **Rich Text Editor**: Enhanced content creation with formatting
- [ ] **Discussion Forums**: Student and instructor interaction
- [ ] **Video Integration**: Lecture recordings and streaming
- [ ] **Quiz System**: Interactive assessments and auto-grading
- [ ] **Grade Book**: Comprehensive grade management and analytics
- [ ] **Calendar Integration**: Due dates and course schedule visualization
- [ ] **Push Notifications**: Real-time alerts and reminders
- [ ] **Analytics Dashboard**: Usage statistics and learning insights
- [ ] **Mobile App**: Native iOS and Android applications
- [ ] **Offline Mode**: Progressive Web App capabilities
- [ ] **Accessibility**: WCAG 2.1 AA compliance
- [ ] **Internationalization**: Multi-language support
- [ ] **Dark Mode**: Theme customization and preferences
- [ ] **Advanced Search**: Full-text search across all content
- [ ] **Collaboration Tools**: Group projects and peer review
- [ ] **AI Assistant**: Intelligent chatbot for student support

See the [open issues](https://github.com/virtual457/kambaz-next-js/issues) for a full list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow React and Next.js best practices
- Write clean, self-documenting code
- Use TypeScript for type safety
- Add unit tests for new features
- Follow component composition patterns
- Keep components small and focused
- Document complex logic
- Test across different browsers

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

**Chandan Gowda K S**

📧 Email: chandan.keelara@gmail.com  
💼 LinkedIn: [linkedin.com/in/chandan-gowda-k-s-765194186](https://www.linkedin.com/in/chandan-gowda-k-s-765194186/)  
🐙 GitHub: [@virtual457](https://github.com/virtual457)  
🌐 Portfolio: [virtual457.github.io](https://virtual457.github.io)

**Project Links:**
- Frontend Application: [https://github.com/virtual457/kambaz-next-js](https://github.com/virtual457/kambaz-next-js)
- Backend API: [https://github.com/virtual457/kambaz-node-server-app](https://github.com/virtual457/kambaz-node-server-app)
- Live Frontend: [https://kambaz-next-js-git-a5-chandan-gowda-k-ss-projects.vercel.app](https://kambaz-next-js-git-a5-chandan-gowda-k-ss-projects.vercel.app)
- Live Backend: [https://kambaz-node-server-app-irwy.onrender.com](https://kambaz-node-server-app-irwy.onrender.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Technologies and resources that made this project possible:

* [Next.js](https://nextjs.org/) - The React Framework for Production
* [React](https://react.dev/) - JavaScript library for building user interfaces
* [Redux Toolkit](https://redux-toolkit.js.org/) - Official Redux state management
* [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at scale
* [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
* [Bootstrap](https://getbootstrap.com/) - Popular CSS framework
* [Vercel](https://vercel.com/) - Platform for frontend deployment
* [Axios](https://axios-http.com/) - Promise-based HTTP client
* [React Icons](https://react-icons.github.io/react-icons/) - Icon library for React
* [ESLint](https://eslint.org/) - JavaScript linting utility
* [Prettier](https://prettier.io/) - Code formatter

### Inspiration
This project was inspired by leading Learning Management Systems including Canvas, Blackboard, and Moodle, while incorporating modern web development practices and user experience principles.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

**Full Stack Learning Management System**  
Frontend (Next.js) + Backend (Node.js)

Made with ❤️ by [Chandan Gowda K S](https://github.com/virtual457)

</div>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/virtual457/kambaz-next-js.svg?style=for-the-badge
[contributors-url]: https://github.com/virtual457/kambaz-next-js/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/virtual457/kambaz-next-js.svg?style=for-the-badge
[forks-url]: https://github.com/virtual457/kambaz-next-js/network/members
[stars-shield]: https://img.shields.io/github/stars/virtual457/kambaz-next-js.svg?style=for-the-badge
[stars-url]: https://github.com/virtual457/kambaz-next-js/stargazers
[issues-shield]: https://img.shields.io/github/issues/virtual457/kambaz-next-js.svg?style=for-the-badge
[issues-url]: https://github.com/virtual457/kambaz-next-js/issues
[license-shield]: https://img.shields.io/github/license/virtual457/kambaz-next-js.svg?style=for-the-badge
[license-url]: https://github.com/virtual457/kambaz-next-js/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/chandan-gowda-k-s-765194186/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Redux]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[Bootstrap]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Vercel]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com/
