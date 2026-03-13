# AI-Assisted Form Validator

A lightweight prototype demonstrating how AI-native workflows can enhance everyday developer tooling. Built with **Node.js**, **Express**, and a minimal HTML/JS frontend.

---

## 🚀 Overview

This project validates user-submitted form data (name, email, message) and returns structured JSON feedback. It was built as part of my application for the **AI-Native Cloud Infrastructure Generalist** role at **Shopware**.

**Key Highlights:**
- Clean separation between frontend and backend.
- JSON-based validation pipeline with real-time feedback.
- AI-native development: small, composable, and testable components.

---

## 🧩 Features

- **Client-side form:** Simple, intuitive UI using Vanilla JS.
- **Server-side validation:** Validates name length, email format, and message completeness.
- **Stateless API:** A single `POST /validate` endpoint for portability.
- **Minimal dependencies:** Focused on clarity and "zero-bloat" architecture.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Frontend:** HTML5 / Vanilla JavaScript
- **Environment:** Replit (Targeted runtime)

---

## 📡 API Reference

### `POST /validate`

**Request Body**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, this is a test message."
}
```

**Success Response (200 OK)**

```json
{
  "valid": true,
  "issues": []
}
```

**Validation Error Response**

```json
{
  "valid": false,
  "issues": ["Name seems too short.", "Email format looks incorrect."]
}
```

---

## ⚙️ Setup & Installation

**Install dependencies:**

```bash
npm install
```

**Start the server:**

```bash
node server.js
```

**Access the app:**

Open [http://localhost:5000](http://localhost:5000) in your browser.

---

## 📝 Demo Notes

This prototype intentionally keeps the architecture simple to highlight:

### ⚡ AI-Native Prototyping Speed

The entire workflow was built iteratively — debugging in real time, refining the backend, and adjusting the frontend based on runtime behavior.

### 🔧 Problem-Solving Under Constraints

Replit's AI-Agent environment imposed unique limitations (port overrides, GitHub sync restrictions). The final solution required:

- **Diagnosing silent fetch failures**
- **Resolving cross-origin issues**
- **Aligning frontend and backend origins**
- **Adapting to Replit's dynamic port assignment**
- **Handling silent process exits caused by unhandled exceptions**  
  During development, the Replit runtime surfaced unhandled exceptions that caused silent process exits.
   
  I added Express-level and process-level error handlers to ensure the service remained resilient and debuggable under failure conditions.

### ☁️ Cloud-Native Thinking

The project is structured so it can be deployed to:

- **Replit**
- **Render**
- **Vercel**
- **Any Node-compatible environment**

### 🤝 Developer Empathy

The JSON output is intentionally human-readable to support debugging, testing, and future AI-assisted enhancements.

## 🧱 Architecture Overview
```
[ Browser ]
     |
     | POST /validate
     v
[ Express Server ]
     |
     | Validation Logic
     v
[ JSON Response ]
```
---

## 💡 Why This Project Matters (Shopware Context)

This prototype demonstrates the exact qualities required for an **AI-Native Cloud Infrastructure Generalist**:

### **1. AI-Native Iteration**
The project was built through rapid, incremental refinement — validating assumptions, debugging live, and adapting the architecture based on runtime behavior.

### **2. Cloud-Native Resilience**
The service now includes:
- Express-level error handling  
- Process-level crash protection  
- Clear JSON responses for both success and failure  

This mirrors real-world microservice hardening.

### **3. Working Under Platform Constraints**
Replit’s AI-Agent environment introduced:
- Port overrides  
- GitHub sync limitations  
- Silent process exits  
- Cross-origin restrictions  

Each constraint required careful diagnosis and adaptation — a core skill in cloud infrastructure roles.

### **4. Developer Empathy**
The output is intentionally:
- human-readable  
- structured  
- predictable  
- easy to debug  

This aligns with Shopware’s philosophy of empowering developers through clarity and simplicity.

### **5. Production-Minded Minimalism**
The architecture is intentionally small:
- one endpoint  
- one responsibility  
- zero unnecessary dependencies  

This reflects a microservice mindset: build only what is needed, but build it well.
