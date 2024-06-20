// app/(auth)/login/page.tsx

import SignIn from "@/components/auth/SignIn";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
};

export default LoginPage;
