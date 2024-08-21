---

# Flask-React File Summarization Application

This repository contains a monorepo with both the backend and frontend code for a file summarization application. The backend is built with Flask, and the frontend is built with React. The application allows users to upload a text file, which is then processed and summarized by the backend.

## Prerequisites

Make sure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Harshul14/Lepide-Software-Document-Summarizer.git
cd your-repo/root
```

### 2. Build and Run the Application

The application is containerized using Docker. All required packages for both the backend and frontend are installed within the Docker containers.

#### Build and start the containers:

```bash
docker-compose up --build
```

This command will:

- Build the Docker images for the Flask backend and React frontend.
- Start the containers for both services.

### 3. Access the Application

Once the containers are up and running:

- **Backend (Flask)**: Runs on `http://localhost:5000`
- **Frontend (React)**: Runs on `http://localhost:3000`

Open your web browser and navigate to `http://localhost:3000` to access the frontend of the application.

### 4. Stop the Application

To stop the running containers, press `CTRL + C` in the terminal where `docker-compose up` was run.

To completely stop and remove all containers, networks, and volumes created by Docker Compose, run:

```bash
docker-compose down
```

### 5. Restarting the Application

To restart the application after it has been stopped:

```bash
docker-compose up
```

### 6. Uploading and Summarizing a File

Once the application is running:

1. Open the React frontend in your browser.
2. Click on the "Upload" button to select a text file.
3. The file will be uploaded to the Flask backend for processing.
4. The summarized text will be displayed on the frontend.

## Project Approach and Challenges

### Approach

#### 1. **Monorepo Structure**
   - The project is organized as a monorepo, which houses both the backend (Flask) and frontend (React) codebases. This structure simplifies version control, dependency management, and deployment, as all related components are maintained in a single repository.
   
#### 2. **Backend (Flask)**
   - The backend is built with Flask, and serves as an API to process and summarize uploaded text files. 
   - Flask was chosen due to its simplicity and ease of integration with various Python libraries used for text processing.
   - The `flask-cors` package was used to handle Cross-Origin Resource Sharing (CORS) between the backend and frontend, ensuring that API requests from the React frontend could be processed securely by the Flask backend.

#### 3. **Frontend (React)**
   - The frontend is built with React (a JavaScript library) for building user interface.
   - The interface allows users to upload a file and view the summarized text. Axios is used to make HTTP requests to the Flask backend.

#### 4. **Docker and Docker Compose**
   - Docker was used to containerize both the backend and frontend, ensuring that the application runs consistently across different environments.
   - A Docker Compose file was created to define and manage running both the Flask and React applications simultaneously.

### Challenges and Solutions

#### 1. **Handling CORS Issues**
   - **Challenge**: During the development, the frontend (running on `http://localhost:3000`) encountered CORS (Cross-Origin Resource Sharing) issues when making requests to the backend (running on `http://localhost:5000`). This happened because browsers block requests from one domain to another unless explicitly allowed by the server.
   - **Solution**: The `flask-cors` library was integrated into the Flask application to resolve this issue. This library allows the backend to include CORS headers in its responses, thereby permitting the frontend to make cross-origin requests.

#### 2. **File Upload and Error Handling**
   - **Challenge**: Ensuring that the file upload functionality worked seamlessly across the frontend and backend, while also handling errors, was a key challenge.
   - **Solution**: Axios was used in the React frontend to handle file uploads, and error handling was implemented to catch and display meaningful error messages to the user. On the backend, appropriate validations were added to handle different file types and ensure smooth processing.

#### 3. **Version Compatibility**
   - **Challenge**: There was a compatibility issue between Flask and Werkzeug, where certain deprecated functions in Werkzeug caused the Flask application to fail.
   - **Solution**: The issue was resolved by specifying compatible versions of Flask and Werkzeug in the `requirements.txt` file, ensuring that the dependencies work together without issues.

#### 4. **Flask-Werkzeug Import Error**
   - **Challenge**: An `ImportError` was encountered when trying to import `url_quote` from `werkzeug.urls` in the Flask application. This was due to changes in the Werkzeug package that deprecated certain functions.
   - **Solution**: The issue was addressed by updating the version of Flask and Werkzeug in the `requirements.txt` file to ensure compatibility. Additionally, deprecated imports were replaced with their modern equivalents, ensuring the Flask application runs smoothly without errors.

### Conclusion

The project involved integrating multiple technologies and overcoming several challenges, particularly related to CORS, Dockerization, and dependency management. Through careful planning and iterative testing, these challenges were addressed, resulting in a robust and scalable file summarization application that can be easily deployed and maintained.

## Bibliography

This project leverages several open-source libraries and frameworks, which are critical to its functionality:

### Backend
- **Flask**: A lightweight WSGI web application framework in Python. [GekksforGeeks Flask-React Documentation](https://www.geeksforgeeks.org/how-to-connect-reactjs-with-flask-api/)
- **flask-cors**: A Flask extension for handling Cross-Origin Resource Sharing (CORS), making it easier to enable CORS on a Flask application. [Flask Cors Python Documentation](https://pypi.org/project/Flask-Cors/)

- **Enable Cors in Flask**: [Stackoverflow](https://stackoverflow.com/questions/25594893/how-to-enable-cors-in-flask)
- **Werkzeug**: A comprehensive WSGI web application library. [GitHub Repository](https://github.com/pallets/werkzeug)

### Frontend
- **React**: A JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers. [GeeksforGeeks React file Uploading](https://www.geeksforgeeks.org/file-uploading-in-react-js/)
- **Axios**: A promise-based HTTP client for the browser and Node.js, used for making HTTP requests from the frontend to the backend. [GitHub Repository](https://github.com/axios/axios)

### Docker and Deployment
- **Docker(Flask)**: A platform to develop, ship, and run applications inside containers. [Dockerise a Flask Application(Medium)](https://medium.com/geekculture/how-to-dockerize-your-flask-application-2d0487ecefb8)
- **Docker(React)**: A platform to develop, ship, and run applications inside containers. [Dockerise a React Application(Medium)](https://behdadk.medium.com/how-to-dockerize-a-react-application-in-5-minutes-c6093636628f)
- **Docker Compose**: A tool for defining and running multi-container Docker applications. [Medium Article](https://medium.com/@adrianhuber17/how-to-dockerize-a-simple-app-using-flask-react-postgresql-and-socket-io-987b1b04faf0)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
