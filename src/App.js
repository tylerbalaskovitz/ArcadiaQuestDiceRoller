import logo from './logo.svg';
import './App.css';
import ArcadiaLogo from './res/Logo.png';
import AttackDiceRoll from './AttackRoll/AttackDiceRoll';
import DefenseDiceRoll from './DefenseRoll/DefenseDiceRoll';
import LoginForm from './LoginPage/LoginPage';

//The App JS will be the main component used to render other components created throughout the application. 
/*
Goals to implement inside of the main App.js component are:

Users should be able to log into the Dice application.

Two separate components, one used for rolling attack dice, and defense dice. Components can specify the amount of dice rolled within the app, and each 
die can dynamically be added or removed from the screen before rolling. Dice will also be used to calculate the total hits done or hits blocked based on their result

Results should be able to be persisted into a DataBase that stores dice results, etc. etc.

*/

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={ArcadiaLogo} className="App-logo" alt="logo" />
        <p>
          A friendly App for rolling dice and consuming resources 
        
          <AttackDiceRoll />
          <DefenseDiceRoll />
        </p>

        
      </header>
    </div>
  );
}

export default App;
