// import logo from './logo.svg';
import './App.css';
import Router from './components/Router'
import UserContainer from './components/UserContainer';
// import UserShow from './UserShow'
// import NewWineContainer from './NewWineContainer'

function App() {
  return (
    // <div className="App">
    //   <Router>
    //     <Switch>
    //     <Route path="/users/new">
    //       <UserContainer/>
    //     </Route>
    //     <Route exact path="/users/:id" render={(routerProps) => <UserShow {...routerProps} />} />
    //     <Route exact path="/users/:userId/wines/new" render={(routerProps) => <NewWineContainer {...routerProps} />}/>
    //     </Switch>
    //   </Router>
      <div>
        {/* <UserContainer /> */}
        <Router />
      
      </div>
  );
}

export default App;
