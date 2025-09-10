"use client";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "sonner";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster richColors position="top-right" />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
export default Providers;
