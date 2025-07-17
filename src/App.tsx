import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VehicleServicing from "./pages/VehicleServicing";
import LogbookService from "./pages/LogbookService";
import Diagnostics from "./pages/Diagnostics";
import BrakeSuspension from "./pages/BrakeSuspension";
import AirConditioning from "./pages/AirConditioning";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AboutUs from "./pages/AboutUs";
import Porsche from "./pages/Porsche";
import BMW from "./pages/BMW";
import Mercedes from "./pages/Mercedes";
import Audi from "./pages/Audi";
import Ferrari from "./pages/Ferrari";
import Lamborghini from "./pages/Lamborghini";
import Bentley from "./pages/Bentley";
import McLaren from "./pages/McLaren";
import Jaguar from "./pages/Jaguar";
import LandRover from "./pages/LandRover";
import Volkswagen from "./pages/Volkswagen";
import Maserati from "./pages/Maserati";
import PerformanceTuning from "./pages/PerformanceTuning";
import CustomExhausts from "./pages/CustomExhausts";
import ElectricVehicleServicing from "./pages/ElectricVehicleServicing";
import PorscheRetrofitting from "./pages/PorscheRetrofitting";
import DigitalServices from "./pages/DigitalServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/vehicle-servicing" element={<VehicleServicing />} />
          <Route path="/logbook-service" element={<LogbookService />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/brake-suspension" element={<BrakeSuspension />} />
          <Route path="/air-conditioning" element={<AirConditioning />} />
          <Route path="/performance-tuning" element={<PerformanceTuning />} />
          <Route path="/custom-exhausts" element={<CustomExhausts />} />
          <Route path="/digital-services" element={<DigitalServices />} />
          <Route path="/electric-vehicle-servicing" element={<ElectricVehicleServicing />} />
          <Route path="/porsche-retrofitting" element={<PorscheRetrofitting />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* Car Brand Pages */}
          <Route path="/porsche" element={<Porsche />} />
          <Route path="/bmw" element={<BMW />} />
          <Route path="/mercedes" element={<Mercedes />} />
          <Route path="/audi" element={<Audi />} />
          <Route path="/ferrari" element={<Ferrari />} />
          <Route path="/lamborghini" element={<Lamborghini />} />
          <Route path="/bentley" element={<Bentley />} />
          <Route path="/mclaren" element={<McLaren />} />
          <Route path="/jaguar" element={<Jaguar />} />
          <Route path="/land-rover" element={<LandRover />} />
          <Route path="/volkswagen" element={<Volkswagen />} />
          <Route path="/maserati" element={<Maserati />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
