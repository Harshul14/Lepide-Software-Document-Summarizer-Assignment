# Flask-React File Summarization Application

This repository contains a monorepo with both the backend and frontend code for a file summarization application. The backend is built with Flask, and the frontend is built with React. The application allows users to upload a text file, which is then processed and summarized by the backend.

## Prerequisites

Make sure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
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

## Additional Notes

- **CORS Issues**: The backend uses `flask-cors` to handle Cross-Origin Resource Sharing (CORS) between the Flask backend and React frontend.
- **Error Handling**: The frontend uses Axios for API calls and handles errors gracefully with appropriate messages.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
