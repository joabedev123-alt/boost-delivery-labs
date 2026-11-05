import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import Index from "./pages/Index";
import EmpresaPage from "./pages/EmpresaPage";
import SolucoesPage from "./pages/SolucoesPage";
import ParaQuemPage from "./pages/ParaQuemPage";
import PlanosPage from "./pages/PlanosPage";
import FormacaoPage from "./pages/FormacaoPage";
import GarconetPage from "./pages/GarconetPage";
import ClientesPage from "./pages/ClientesPage";
import ContatoPage from "./pages/ContatoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/a-empresa" element={<EmpresaPage />} />
            <Route path="/solucoes" element={<SolucoesPage />} />
            <Route path="/para-quem" element={<ParaQuemPage />} />
            <Route path="/planos" element={<PlanosPage />} />
            <Route path="/formacao" element={<FormacaoPage />} />
            <Route path="/garconet" element={<GarconetPage />} />
            <Route path="/clientes" element={<ClientesPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
