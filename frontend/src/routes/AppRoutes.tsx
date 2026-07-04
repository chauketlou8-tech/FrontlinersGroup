import { Routes, Route } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";

import Home from "../pages/Home"
import About from "../pages/About"
import Subjects from "../pages/Subjects";
import { Enrollment, Payment } from "../pages/Enrollment";
import Contact from "../pages/Contact";

export default function AppRoutes() {
    return (
        <PageLayout>
            <Routes>
                <Route path="/frontlinersgroup.com/" element={ <Home/> } />
                <Route path="/frontlinersgroup.com/home" element={ <Home/> } />
                <Route path="/frontlinersgroup.com/about" element={ <About/> } />
                <Route path="/frontlinersgroup.com/subjects" element={ <Subjects/> } />
                <Route path="/frontlinersgroup.com/enrollments" element={ <Enrollment/> } />
                <Route path="/frontlinersgroup.com/enrollments/payment" element={ <Payment/> }/>
                <Route path="/frontlinersgroup.com/contact" element={ <Contact/> } />
            </Routes>
        </PageLayout>
    )
}