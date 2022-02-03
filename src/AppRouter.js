import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import New from "./router/New";
import Top from "./router/Top";
import Home from "./router/Home";
import { Userpage } from "./router/UserPage";
import { useGetPostsByTypeQuery } from "./services/api";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const { data } = useGetPostsByTypeQuery("new");
  const a = useSelector((state) => console.log(state));
  console.log(data);
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
