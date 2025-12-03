import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Providers from "./providers/index.tsx";

// i18n config
import "./i18n/i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Providers />
    </React.Suspense>
  </StrictMode>
);
