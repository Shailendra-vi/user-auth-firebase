import { useEffect, useState } from 'react';
import { auth } from './firebase';
import GoogleLogin from "./Login";
import Signup from "./Signup";
import Welcome from "./Welcome";
import { User } from "firebase/auth";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  if (user) {
    return <Welcome user={user} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
          Welcome to AuthFlow
        </h1>
        <p className="text-gray-400">Securely sign in or create an account</p>
      </div>
      <div className="space-y-4 w-full max-w-xs">
        <GoogleLogin />
        <Signup />
      </div>
    </div>
  );
}

export default App;