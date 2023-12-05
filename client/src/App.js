import { Switch, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import "./assets/styles/main.css";

import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Nhom from "./pages/Nhom.jsx";
import Main from "./components/layout/Main";

import AppContextProvider from "./context/AppContext.js";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Switch>
          <Route path="/login" exact component={SignIn} />
          <Route path="/register" exact component={SignUp} />
          <Main>
            <Route path="/nhom" exact component={Nhom} />
            <Redirect from="*" to="/nhom" />
          </Main>
        </Switch>
      </div>
    </AppContextProvider>
  );
}

export default App;
