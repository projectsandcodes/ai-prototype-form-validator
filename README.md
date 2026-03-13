# AI-Assisted Form Validator  
A lightweight prototype demonstrating how AI-native workflows can enhance everyday developer tooling.  
Built with **Node.js**, **Express**, and a minimal HTML/JS frontend.

---

## 🚀 Overview  
This prototype validates user-submitted form data (name, email, message) and returns structured JSON feedback.  
It demonstrates:

- Clean separation between frontend and backend  
- JSON-based validation pipeline  
- Real-time feedback loop  
- A minimal, production-friendly Express setup  
- AI-native thinking: small, composable, testable components  

This project was built as part of my application for the **AI-Native Cloud Infrastructure Generalist** role at **Shopware**.

---

## 🧩 Features  
- **Client-side form** with a simple, intuitive UI  
- **Server-side validation** for:
  - Name length  
  - Email format  
  - Message completeness  
- **JSON response output** for easy debugging  
- **Stateless API endpoint** (`POST /validate`)  
- **Minimal dependencies** for clarity and portability  

---

## 🛠️ Tech Stack  
- **Node.js**  
- **Express.js**  
- **HTML + Vanilla JavaScript**  
- **Replit (runtime)**  

---

## 📡 API Endpoint  
### `POST /validate`

**Request Body**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, this is a test message."
}
