# Employee Creator - Full-Stack Web App

## Project Overview
A full-stack employee management application with comprehensive CRUD functionality. Developed with a Spring Boot API, a TypeScript React UI, MySQL, Redux, Tailwind CSS, Log4j, JUnit, and Axios.

## Screenshot
![Project Screenshot](/images/project-screenshot.png)

## Goals & MVP
- The project aims to develop a Spring-based backend for managing employees in a MySQL database, paired with a React frontend for seamless user interaction.
- The MVP features a polished UI for adding, editing, and deleting employees with comprehensive error handling and toast notifications, while the backend ensures robust error management, request logging with Log4j, and API documentation via Spring Swagger.

## Table of Contents
- [Frontend](#frontend---react-typescript)
- [Backend](#backend---spring-boot-api)
- [General](#general)

# Frontend - React Typescript

## Tech Stack

- TypeScript
- React
- SCSS
- Tailwind CSS
- Redux
- Axios
- Git


## Build Steps
1. Clone the project from GitHub:
   ```bash
   git clone git@github.com:cyberforge1/employee-creator-full-stack.git
    ```

2. Create, initialize and link a MySQL database to the backend API

3. Run the backend API locally

4. Navigate to the frontend directory
   ```bash
   cd employee-creator-full-stack/react-frontend
    ```

5. Run the frontend locally 
   ```bash
   npm run dev
    ```

## How To Use
Users can create an employee by filling out the form inputs and submitting the 'Save' button. Employees can then be edited or deleted with a button click.

## Design Goals
The objective for the frontend was to create a responsive, appealing, and intuitive user interface that allows users to easily access the backend features.

## Project Features
- An efficient user interface to interact with the backend API to access CRUD functionality.
- Dynamic filtering for specific employee status.
- Instantaneous searching for matching employees.
- Comprehensive error handling and toast notifications.
- Responsive design with Tailwind CSS.

# Backend - Spring Boot API

## Tech Stack

- Java
- Spring Boot
- Spring Swagger
- Log4j
- JUnit
- MySQL

## Build Steps
1. Install prerequisite software:
- Java Development Kit
- Apache Maven
- MySQL

2. Clone the project from GitHub:

```bash
git clone git@github.com:cyberforge1/employee-creator-full-stack.git
```

3. Navigate into the project directory:

```bash
cd employee-creator-full-stack/spring-backend
```

4. Open MySQL WorkBench (or access through CLI) and create a new database:

```sql
CREATE DATABASE employee_db;
```

5. Navigate to src/main/resources and create an application.properties file in this directory.

6. Integrate your specific details into application.properties:

```sql
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
```

7. Clean and build the project:

```bash
mvn clean install
```

8. Run the project locally:

```bash
mvn spring-boot:run
```

9. Navigate to the following URL to confirm project start:

```bash
http://localhost:8080/employees
```

## How To Use
To access this backend, first follow the build steps above. The application frontend provides a user interface to interact with this backend automatically. Endpoints can also be accessed and tested through applications like Postman or Swagger UI.

## Design Goals
The aim of this application was to create a robust API to create, read, update, and delete employee data.

## Project Features
- Comprehensive CRUD functionality with database access.
- A MySQL database to store employee data.
- User error notification for incorrect endpoint access.
- Enhanced logging features provided by Log4j.
- Project document generation by Spring Swagger.
- Unit testing provided by JUnit.

# General

## Additions & Improvements
- Dockerize and deploy the application.
- Fix bug in dynamic form population.
- Implement filter and search functionality.
- Add user authentication and login functionality.
- Review and enhance testing coverage for both frontend and backend.

## Learning Highlights
- Practiced React skills by adding dynamic filtering and searching into the application.
- Applied various testing methods and libraries to the frontend and backend.
- Gained experience building a Spring Boot application with robust features.
- Built familiarity with Spring Boot elements (controllers, services, repositories, DTOs, etc.).
- Created and integrated a MySQL database for desired data.

## Challenges
- Building new features into the application with associated libraries to increase scope.
- Learning how to apply unit-testing, integration testing, and end-to-end testing on the frontend and backend.

## Contact Me
- Visit my [LinkedIn](https://www.linkedin.com/in/obj809/) for more details.
- Check out my [GitHub](https://github.com/cyberforge1) for more projects.
- Or send me an email at obj809@gmail.com
<br />
Thanks for your interest in this project. Feel free to reach out with any thoughts or questions.
<br />
<br />
Oliver Jenkins © 2024
