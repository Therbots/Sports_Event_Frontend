import { BrowserRouter as Router } from "react-router-dom";
import React, { ReactDOM } from "react";

ReactDOM.render(
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
);