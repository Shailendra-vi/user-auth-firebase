import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";

const Signup = () => {
  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Signup failed", error);
      alert("Signup failed, please try again.");
    }
  };

  return (
    <button
      onClick={handleGoogleSignup}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300"
    >
      <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path fill="currentColor" d="M624 448h-24.68L359.54 117.75l53.41-73.55c5.19-7.15 3.61-17.16-3.54-22.35-7.15-5.19-17.15-3.61-22.35 3.55L320 63.3 278.83 6.6c-5.19-7.15-15.2-8.74-22.35-3.55-7.15 5.19-8.74 15.2-3.55 22.35l53.41 73.55L40.68 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM320 288l116.36 160H203.64L320 288z"/>
      </svg>
      Create with Google
    </button>
  );
};

export default Signup;