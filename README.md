# Student-Management-System

# Student Management System

A full-stack Student Management System built using **React.js, Spring Boot, PostgreSQL, and Docker**. The application provides a web interface for managing student records, with a Spring Boot REST API and PostgreSQL database.

## Screenshots
### application running
<img width="1912" height="1070" alt="image" src="https://github.com/user-attachments/assets/37cb4b09-5e55-4857-9a83-b323946795f9" />


### Application Home Page

<img width="1882" height="1007" alt="Screenshot 2026-11-16 140311" src="https://github.com/user-attachments/assets/13281f62-4b86-445c-acd2-2083180a4693" />

### Student Records
<img width="1902" height="1025" alt="Screenshot 2026-11-16 140354" src="https://github.com/user-attachments/assets/66f2d485-2901-4474-82d3-bc2e221686f6" />
<img width="1917" height="1078" alt="Screenshot 2026-11-16 140411" src="https://github.com/user-attachments/assets/d6132051-02cd-4dba-887c-2323869274f8" />



### Add Student
<img width="1917" height="1078" alt="Screenshot 2026-11-16 140411" src="https://github.com/user-attachments/assets/11422067-f5b2-4b8e-a46e-d9dbf1a8e216" />


### Docker Containers
<img width="1917" height="1071" alt="image" src="https://github.com/user-attachments/assets/b1e1462e-9a4a-4648-9f3b-e3c8e8a4b045" />


## Tech Stack

**Frontend**
- React.js
- JavaScript
- HTML and CSS
- Axios
- Vite

**Backend**
- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- Maven
- REST APIs

**Database**
- PostgreSQL

**DevOps and Tools**
- Docker
- Docker Compose
- Nginx
- Git and GitHub
- Postman

## Architecture

```text
React Frontend
      |
      | HTTP Requests
      v
Nginx Reverse Proxy
      |
      v
Spring Boot REST API
      |
      v
Spring Data JPA / Hibernate
      |
      v
PostgreSQL Database
```

## Features

- Manage student records through a web interface.
- Perform student CRUD operations.
- Connect the React frontend to Spring Boot REST APIs.
- Store application data in PostgreSQL.
- Run the frontend, backend, and database using Docker Compose.
- Persist database data using a Docker volume.

## Project Structure

```text
Student/
├── backend/
│   ├── src/
│   ├── Dockerfile
│   └── pom.xml
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
├── docs/
│   └── screenshots/
├── docker-compose.yml
└── README.md
```

## Run the Project Using Docker

### Prerequisites

- Docker Desktop
- Git

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Student
```

### 2. Start the application

```bash
docker compose up -d --build
```

### 3. Access the application

| Service | URL |
|---|---|
| React Frontend | http://localhost:3000 |
| Spring Boot Backend | http://localhost:8080 |
| Student API | http://localhost:8080/students/getallstudents |

### 4. Check running containers

```bash
docker compose ps
```

### 5. Stop the application

```bash
docker compose down
```

## Database

- Database: PostgreSQL
- Database name: `student_db`
- Database data is persisted using a Docker volume.

## What I Learned

- Developing a full-stack application using React and Spring Boot.
- Building and consuming REST APIs.
- Connecting Spring Boot with PostgreSQL using JPA.
- Containerizing applications using Docker.
- Configuring multiple services using Docker Compose.
- Using Nginx as a reverse proxy for frontend-to-backend communication.

## Author

**Manikanta Kotha**

- GitHub: https://github.com/manikanta0921

---

*This project was developed as a practical learning project to improve my full-stack Java development and Docker skills.*
