import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ProjectDetails } from "./pages/ProjectDetailsPage";
import { Navbar } from "@/components/NavBar";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "@/components/FooterSection";

function App() {
  return (
    <BrowserRouter>
      {/* Global Layout */}
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Background effects and layout */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <StarBackground />
        </div>

        {/* Top Navbar */}
        <Navbar />

        {/* Routed Pages */}
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Shared Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
