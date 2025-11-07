# 🚀 NestJS 11 - Demo Project

This project is a **REST API built with NestJS 11**.  
It demonstrates the core concepts of NestJS such as **modules**, **controllers**, and **services**.

---

## 📂 Project Structure
src/
├── main.ts # Entry point of the application
├── app.module.ts # Root module
└── users/
├── users.controller.ts # Handles incoming requests (routes)
├── users.service.ts # Business logic (data manipulation)
└── users.module.ts # Groups controller & service together


---

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/AnasBenlemlih/nest-demoo.git
cd nest-demoo
npm install
npm run start:dev

## The app will start on:
👉 http://localhost:3000

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| GET    | `/users`     | Get all users      |
| GET    | `/users/:id` | Get one user by id |
| POST   | `/users`     | Create a new user  |

## 👤 Author

Anas BENLEMLIH
Full-Stack Developer (Java / Angular)