import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const checkAPI = async () => {
            try {
                const response = await api.get("/health");

                console.log("API Response:", response.data);

                setMessage(response.data.message);
            } catch (error) {
                console.error("API Error:", error);

                setMessage("Backend connection failed");
            }
        };

        checkAPI();
    }, []);

    return (
        <div>
            <h1>Smart Service Management</h1>
            <p>{message}</p>
        </div>
    );
}

export default Home;