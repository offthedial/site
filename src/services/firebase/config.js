/**
 * Manages firebase configuration (yes, it's safe to be in version control)
 */
const config = {
  apiKey: "AIzaSyCOiE5yw09RbRjgZf7B_t7rvgGfa49j6fU",
  authDomain: "off-the-dial-26e93.firebaseapp.com",
  databaseURL: "https://off-the-dial-26e93.firebaseio.com",
  projectId: "off-the-dial-26e93",
  storageBucket: "off-the-dial-26e93.appspot.com",
  messagingSenderId: "822224581984",
  appId: "1:822224581984:web:951aa8d85c77e6209e5a05",
}

export default config
export const cloudFunctionsApi = `http://localhost:5000/${config.projectId}/us-central`
