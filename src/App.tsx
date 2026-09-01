import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo, useEffect } from "react";
import { loadStyreneFont } from "@/utils/fontLoader";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => {
  const routerBaseName = "/";
  const queryClient = useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: false,
      },
    },
  }), []);

  useEffect(() => {
    // Load Styrene font on app initialization
    loadStyreneFont().then(() => {
      console.log('Styrene font loaded successfully');
    }).catch(() => {
      console.warn('Failed to load Styrene font, using fallback');
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={routerBaseName}>
          {/* Global Background Dots */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 3px 3px, rgba(0, 0, 0, 0.25) 1.5px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative min-h-screen font-styrene z-10 bg-transparent">
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;