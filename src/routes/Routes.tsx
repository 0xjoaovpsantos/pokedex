import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ListPokemons } from '../pages/ListPokemons/ListPokemons';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={ListPokemons} path="/" exact />
    </Switch>
  </BrowserRouter>
);
