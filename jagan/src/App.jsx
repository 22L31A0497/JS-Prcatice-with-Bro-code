import Card from "./Card";
import Student from "./Student";
import UserGreetings from "./UserGreetings";


function App() {
 return(
  <>
  {/* <Card/> */}
  <Student name="Jagan" age={30} isStudent={true}/>
  <Student name="Sai sirisha" age={20} isStudent={true}/>
  <Student name="Padma Sri" age={19} isStudent={false}/>
  <UserGreetings isLoged={true} name="Jagan"/>
  <UserGreetings isLoged={false} name="Siri"/>
  </>
    
   );
}

export default App
