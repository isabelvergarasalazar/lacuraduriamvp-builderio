import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Cartelera from "./pages/Cartelera";
import EventDetails from "./pages/EventDetails";
import PublicarEvento from "./pages/PublicarEvento";
import ComoPublicar from "./pages/ComoPublicar";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cartelera" element={<Cartelera />} />
          <Route path="/cartelera/:eventSlug" element={<EventDetails />} />
          <Route path="/publicar" element={<PublicarEvento />} />
          {/* Redirect /EventDetails to a sample event */}
          <Route path="/EventDetails" element={<Navigate to="/cartelera/decibelio-mariposa-1" replace />} />
          {/* Demo route for online events */}
          <Route path="/online-event" element={<Navigate to="/cartelera/online-virtual-concert-1" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Get the root element
const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

// Create or reuse the React root
let root = (container as any)._reactRoot;
if (!root) {
  root = createRoot(container);
  (container as any)._reactRoot = root;
}

// Render the app
root.render(<App />);
