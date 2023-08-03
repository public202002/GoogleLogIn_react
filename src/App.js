import "./styles.css";
import GoogleLogin from "react-google-login";

export default function App() {
  const handleResponse = (res) => {
    console.log("OK ", res);
  };
  const handleError = (err) => {
    console.log("ERROR ", err);
  };
  return (
    <div className="App">
      <h1>Google Login</h1>
      <GoogleLogin
        clientId="957121534217-dp42arud9b36ucmf7v6fumh0n1qcsrph.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={handleResponse}
        onFailure={handleError}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
