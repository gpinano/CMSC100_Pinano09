import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages publishes this project under the repository name.
export default defineConfig({
  plugins: [react()],
  base: "/CMSC100_Pinano09/"
});
