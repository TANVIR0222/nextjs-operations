import { RegistrationForm } from "@/feature/auth/components/registration-form";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm space-y-4 rounded-xl border p-8 shadow-sm">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-semibold">Sign in</h1>
          <p className="text-sm text-muted-foreground">
            Choose a provider to continue
          </p>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default LoginPage;
