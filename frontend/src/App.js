import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [file, setFile] = useState(null);
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    const handleFileUpload = (e) => {
        setFile(e.target.files[0]);
        setError("");
    };

    const handleSubmit = async () => {
        if (!file) {
            setError("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const uploadResponse = await axios.post("http://localhost:5000/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('File uploaded successfully:', uploadResponse.data);

            const summarizeResponse = await axios.post("http://localhost:5000/summarize", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Summary received:', summarizeResponse.data);

            setContent(summarizeResponse.data.content);
            setSummary(summarizeResponse.data.summary);

        } catch (error) {
            console.error("Error uploading or summarizing the file", error);
            setError("An error occurred while uploading or summarizing the file.");
        }
    };

    return (
        <div className="App">
            <h1>Document Summarization</h1>
            <h2>Lepide Software Assignment</h2>
            <h3>Submitted By: Harshul Varshney</h3>
            <input type="file" onChange={handleFileUpload} />
            <button onClick={handleSubmit}>Upload and Summarize</button>
            {content && <div className="summary"><h2>File Content:</h2><p>{content}</p></div>}
            {summary && <div className="summary"><h2>Summarized Content:</h2><p>{summary}</p></div>}
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default App;