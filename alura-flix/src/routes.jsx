import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;