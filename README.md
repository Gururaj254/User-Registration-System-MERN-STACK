# AuthFlow: Secure Registration System 🚀

**AuthFlow** is a professional, full-stack authentication and user management system built with **Node.js, MySQL, and React**. It goes beyond simple registration by offering Role-Based Access Control (RBAC), secure password recovery, and a polished, modern UI.

---

## 🌟 Key Features

* **🔐 Secure Authentication**: JWT-based login and registration with industrial-grade password hashing via `bcryptjs`.
* **🛡️ Role-Based Access Control (RBAC)**: Distinct permissions for **Admins** and **Users**. Admins get exclusive access to user management tools.
* **📋 Admin Management**: A dedicated dashboard for Admins to view all registered users and perform account deletions.
* **📧 Smart Password Recovery**: A complete "Forgot Password" workflow using cryptographically secure tokens and time-based expiry logic in MySQL.
* **🎨 High-End UI**: A modern, responsive interface featuring clean typography, soft shadows, and intuitive emoji-based feedback.
* **🗄️ Relational Data Power**: Utilizes **MySQL** and **Sequelize ORM** for structured, scalable data management.

---

## 🛠️ Tech Stack

### Frontend
* **React.js**: Functional components with Hooks.
* **Context API**: Centralized state management for user sessions.
* **Axios**: Interfacing with the REST API.
* **Custom CSS3**: Modern UI/UX design with a professional slate-and-blue color palette.

### Backend
* **Node.js & Express**: High-performance RESTful API.
* **Sequelize ORM**: Object-relational mapping for MySQL.
* **MySQL**: Reliable persistent data storage.
* **JWT & Bcrypt**: Secure stateless authentication and data protection.

---

## 📂 Project Structure

```text
authflow-system
│
├── backend
│   ├── config        # DB connection & Mailer config
│   ├── controllers   # Business logic (Login, Reset, Delete)
│   ├── middleware    # Auth & Admin protection layers
│   ├── models        # MySQL/Sequelize Schema
│   └── routes        # API Endpoint definitions
│
└── frontend
    ├── src
    │   ├── api       # Axios instance
    │   ├── context   # Auth Global State
    │   └── pages     # Login, Register, AdminDashboard, etc.
    └── App.css       # Professional UI Styling


⚙️ Installation & Setup
1️⃣ Clone the repository
Bash
git clone [https://github.com/Gururaj254/AuthFlow-System.git](https://github.com/Gururaj254/AuthFlow-System.git)

2️⃣ Database Setup
Create a MySQL database named identity_manager_db.

Ensure your MySQL server is running.

3️⃣ Backend Setup
Bash
cd backend
npm install
# Create a .env file with: PORT, JWT_SECRET, DB_NAME, DB_USER, DB_PASS
npm run dev

4️⃣ Frontend Setup
Bash
cd frontend
npm install
npm run dev


📡 Core API Endpoints
Action	Method	Endpoint	Access
Register User	POST	/api/users/	Public
Login User	POST	/api/users/login	Public
Forgot Password	POST	/api/users/forgotpassword	Public
Reset Password	PUT	/api/users/resetpassword	Public
Get All Users	GET	/api/users/	Admin Only
Delete User	DELETE	/api/users/:id	Admin Only


👨‍💻 Author
Gururaj Dharmashetti
Full-Stack Developer | Node.js & Java Specialist

GitHub: Gururaj254
