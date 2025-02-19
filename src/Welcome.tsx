import { User } from "firebase/auth";
import { auth } from "./firebase";

interface WelcomeProps {
  user: User;
}

const Welcome: React.FC<WelcomeProps> = ({ user }) => {
    console.log(user)
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8 max-w-md w-full border border-gray-700">
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 p-1 rounded-full mb-4">
            <div className="bg-gray-800 rounded-full p-2">
              {user.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt="Profile" 
                  className="w-20 h-20 rounded-full"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center">
                  <span className="text-2xl text-white">
                    {user.displayName?.charAt(0) || 'U'}
                  </span>
                </div>
              )}
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome, <span className="text-blue-400">{user.displayName || 'User'}</span>
          </h1>
          <p className="text-gray-400">{user.email || 'No email provided'}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Welcome;