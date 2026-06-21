# ByteCamp - AI & Robotics Summer Camp Landing Page

ByteCamp is a modern, responsive landing page for an interactive AI & Robotics Summer Workshop & Camp tailored for young minds aged 8–14. It features a custom kid-friendly theme, organic design components, and a robust registration backend.

---

## 📝 Project Details & Submission Requirements

### 🔗 Project Links
*   **GitHub Repository**: [https://github.com/Arymalakhera/-ai-robotics-workshop](https://github.com/Arymalakhera/-ai-robotics-workshop)
*   **Live Demo Link**: [https://ai-robotics-workshop-el52v8isb-aryma9107-6155s-projects.vercel.app/]

---

## 🎯 Short Note on Approach & Improvements

### **Our Approach**
I redesigned the landing page with a high-contrast, organic "summer camp and workshop" theme (**ByteCamp**). Typography is standardized around Fredoka (playful headings) and Plus Jakarta Sans (body). I created an engaging visual hierarchy, including an eye-catching promotional badge, a balanced outcomes grid, and a cleaned illustration of a robotics classroom in the Hero section. On the backend, I implemented a robust Express validation middleware and a file-based JSON database to record inquiries securely.

### **Improvements with More Time**
1.  **Database Migration**: Migrate the local JSON file database to MongoDB Atlas or PostgreSQL to enable scalable, cloud-persistent data storage.
2.  **Admin Dashboard**: Build a secure dashboard for coordinators to search, filter, and export student inquiries.
3.  **Hosting Deployment**: Deploy the frontend to Vercel and the backend to Render to provide a fully live, cloud-hosted demo.

---

## 🛠️ Local Installation & Running Instructions

### **Prerequisites**
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### **1. Set Up and Run the Backend Server**
1.  Navigate into the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Express server:
    ```bash
    npm start
    ```
    *The backend server will run on `http://localhost:5000`.*

### **2. Set Up and Run the Frontend UI**
1.  Open a new terminal window and navigate into the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Vite development server:
    ```bash
    npm run dev
    ```
    *Open `http://localhost:5173` in your browser to view the application.*
