import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvicer, 
    GithubAuthProvicedr, 
} from 'firebase/auth';

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }
}

export default AuthService;