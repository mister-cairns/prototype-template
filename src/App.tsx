import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, ComponentsPage, PrototypePage } from "@/pages";
import { PrototypeDisclaimer } from "@/components/global/prototype-disclaimer";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/prototype" element={<PrototypePage />} />
      </Routes>
      <PrototypeDisclaimer />
    </BrowserRouter>
  );
}

export default App;
