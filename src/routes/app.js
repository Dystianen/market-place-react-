// import {AnimatedSwitch} from "react-router-transition";
import {Redirect, Route, Switch} from "react-router-dom";
// import {PublicRoute} from "../component/PublicRoute";
// import {Login} from "../pages/Login/Login";
// import {App} from "../pages/App/App";
import {Home} from "../pages/App/Home";
import {Detail} from "../pages/App/Detail";
export const AppRoute = () => {
    return <Switch>
        <Route path={"/app/home"}>
            <Home/>
        </Route>
        <Route path={"/app/detail"}>
            <Detail/>
        </Route>
        <Route path="/app" exact>
            <Redirect to={'/app/home'} />
        </Route>
    </Switch>
    // <About/>
}
