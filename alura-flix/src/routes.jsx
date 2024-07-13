import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewVideo from "./pages/NewVideo";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                <Route index element={<Index />} />
                <Route path="newVideo" element={<NewVideo />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;