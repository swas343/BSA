import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

import PublicRoute from "./helpers/PublicRoute";
import PrivateRoute from "./helpers/PrivateRoute";
import { AuthContextProvider } from "./store/auth-ctx";

function App() {
  return (
    <AuthContextProvider>
      <Switch>
        <PublicRoute
          restricted={true}
          component={SignIn}
          path="/signin"
          exact
        />
        <PublicRoute
          restricted={true}
          component={SignUp}
          path="/signup"
          exact
        />

        <PrivateRoute component={Dashboard} path="/dashboard" exact />
        <PrivateRoute component={Users} path="/users" exact />
        <PrivateRoute component={Settings} path="/settings" exact />

        <Route path="*">
          <Redirect to="/signin" />
        </Route>
      </Switch>
    </AuthContextProvider>
  );
}

export default App;

// { googleId: "107156487769979600592", imageUrl: "https://lh3.googleusercontent.com/a-/AOh14Gj26K3L2EnRE8KwR5f-NFij70Mz0H-e9HzGAe-g=s96-c", email: "bidecinnovations@gmail.com", name: "bidec Innovations", givenName: "bidec", familyName: "Innovations" }
