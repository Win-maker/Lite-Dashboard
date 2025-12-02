import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from "@/components/ui/provider";
import  indexedDBService  from '../src/indexedDb/indexedDbService.ts';

async function start() {
  try {
    await indexedDBService.initialize();

  } catch (error) {
    console.error("Failed to initialize IndexedDB", error);
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider>
        <App />
      </Provider>
    </StrictMode>
  );
}

start();
