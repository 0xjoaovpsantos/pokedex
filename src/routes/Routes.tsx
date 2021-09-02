//react-router-dom
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import { ListPokemons } from '../pages/ListPokemons/ListPokemons';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={ListPokemons} path="/" exact />
    </Switch>
  </BrowserRouter>
);
