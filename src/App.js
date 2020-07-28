import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from './components/Home';
import ToolbarWebPage from './components/Toolbar';
import QuienesSomosComponent from './components/QuienesSomos';
import DiscapacidadAuditivaComponent from './components/DiscapacidadAuditiva';
import DiscapacidadVisualComponent from './components/DiscapacidadVisual';
import NoticiasComponent from './components/Noticias';
import ContactoComponent from './components/Contacto';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ToolbarWebPage />
          <HomeComponent />
        </Route>
        <Route path="/quienes-somos">
          <ToolbarWebPage />
          <QuienesSomosComponent />
        </Route>
        <Route path="/discapacidad-auditiva">
          <ToolbarWebPage />
          <DiscapacidadAuditivaComponent />
        </Route>
        <Route path="/discapacidad-visual">
          <ToolbarWebPage />
          <DiscapacidadVisualComponent />
        </Route>
        <Route path="/noticias">
          <ToolbarWebPage />
          <NoticiasComponent />
        </Route>
        <Route path="/contacto">
          <ToolbarWebPage />
          <ContactoComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
