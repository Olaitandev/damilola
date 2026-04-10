import AuthForm from "@/components/AuthForm";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedText } from "@/components/animations/AnimatedText";

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <AnimatedText>
          <div>
            <h1 className="text-center text-3xl font-bold text-gray-900 mb-8">
              Authentication Demo
            </h1>
          </div>
        </AnimatedText>
        <AnimatedSection variant="scaleIn" delay={0.2}>
          <AuthForm />
        </AnimatedSection>
      </div>
    </div>
  );
}
