"use client";
import ReduxProvider from "../store/ReduxProvider";
import { AuthProvider } from "../contexts/AuthContext";
import { PageTransition } from "@/components/animations/PageTransition";

export default function ClientWrapper({ children }) {
  return (
    <AuthProvider>
      <ReduxProvider>
        <PageTransition>{children}</PageTransition>
      </ReduxProvider>
    </AuthProvider>
  );
}
