import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import New from "./router/New";
import Top from "./router/Top";
import Home from "./router/Home";
import { Userpage } from "./router/UserPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <main>
          <Route path="/" component={Home} exact />
          <Route path="/top" component={Top} />
          <Route path="/new" component={New} />
          <Route path="/user/:name" component={Userpage} />
        </main>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
