import classes from "./SocialBtn.module.css";
import { useGoogleLogin } from "react-google-login";
import AuthCtx from "../../store/auth-ctx";
import { useContext } from "react";

const clientId =
  "937858728792-8f5lnf705l5pnq4er26p4rtvfiu39848.apps.googleusercontent.com";

const GoogleAuth = (props) => {
  const authCtx = useContext(AuthCtx);

  const onSuccess = (res) => {
      authCtx.login(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login, Please try again`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button className={classes.socialBtn} onClick={signIn}>
      <span className={classes.icon}>
        <img src={props.icon} alt="social icon" />
      </span>
      {props.text}
    </button>
  );
};

export default GoogleAuth;
