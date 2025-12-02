import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "@/components/ui/provider";
import { Provider as Pd} from "react-redux";
import indexedDBService from "../src/indexedDb/indexedDbService.ts";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/index.ts";

async function start() {
  try {
    await indexedDBService.initialize();
  } catch (error) {
    console.error("Failed to initialize IndexedDB", error);
  }

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Pd store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Provider>
            <App />
          </Provider>
        </PersistGate>
      </Pd>
    </StrictMode>
  );
}

start();
