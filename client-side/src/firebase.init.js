// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfoLkZ1WJT6b-qNIeCyYh4Xtw4YnrXKwI",
  authDomain: "food-order-app-1f739.firebaseapp.com",
  projectId: "food-order-app-1f739",
  storageBucket: "food-order-app-1f739.appspot.com",
  messagingSenderId: "745722275598",
  appId: "1:745722275598:web:db96efaca1e07d34b3d95f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;