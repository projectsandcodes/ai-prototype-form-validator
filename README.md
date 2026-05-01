# For my Full-Stack MERN development history (10+ projects), and CAD-GIS Automation Case Study, please visit my:
- [2019 Development Archive](https://github.com/pradeepkrishnarao)
- [CAD–GIS Automation Case Study](https://github.com/projectsandcodes/cad-gis-automation-case-study)

# AI-Assisted Form Validator
A minimal Express-based prototype demonstrating server-side form validation with real-time JSON feedback.
Designed for clarity, resilience, and ease of testing.

---

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

## 🚀 Features
- Server-side validation for name, email, and message

- Inline field-level error messages

- Success and error banners with fade-in animation

- Animated success checkmark

- Validation summary box

- Color-coded JSON response output

- Reset button for rapid testing

- Clean, minimal UI with no external dependencies

---
## 🧪 Validation Rules
- **Name:** must be at least 2 characters

- **Email:** must match real-world TLD pattern (example@domain.com)

- **Message:** must be at least 10 characters

---

## 📁 Project Structure
```
/frontend
   index.html
server.js
package.json
README.md
```
---

## ▶️ Running Locally
**Prerequisites**
- Node.js (v18 or later recommended)

**Install dependencies**
```
npm install
```
**Start the server**
```
npm start
```
Server runs on http://localhost:5000 by default.

---

## ⚙️ Technical Notes
- Uses express and body-parser for request handling

- Includes Express-level error middleware

- Includes process-level crash protection (uncaughtException, unhandledRejection)

- Email validation uses a practical regex enforcing a minimum 2‑letter TLD

- Static frontend served from /frontend directory

---

## 👤 Author
Built by **Pradeep**

- GitHub: https://github.com/projectsandcodes

- Medium: https://medium.com/@shinealldaylong.blogspot.com

---
