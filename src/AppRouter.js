import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import New from "./router/New";
import Top from "./router/Top";
import Home from "./router/Home";
import Job from "./router/Job";
import { Userpage } from "./router/UserPage";
import { useGetPostsByTypeQuery } from "./services/api";
import { useSelector } from "react-redux";
import Show from "./router/Show";
import Ask from "./router/Ask";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <main>
          <Route path="/" component={Home} exact />
          <Route path="/top" component={Top} />
          <Route path="/new" component={New} />
          <Route path="/show" component={Show} />
          <Route path="/ask" component={Ask} />
          <Route path="/job" component={Job} />
          <Route path="/user/:name" component={Userpage} />
        </main>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
