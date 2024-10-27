import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
    const rootPath = path.resolve(process.cwd());
    const srcPath = `${rootPath}/src`;
    const componentPath = `${rootPath}/src/Components`;

    return {
        plugins: [react()],
        resolve: {
            alias: {
                "~": rootPath,
                "@": srcPath,
                "#": componentPath,
            },
        },
    };
});

// https://vitejs.dev/config/
