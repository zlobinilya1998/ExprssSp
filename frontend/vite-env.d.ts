/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // добавьте сюда другие переменные окружения, если они есть
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
