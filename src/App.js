import "./App.css";
import ClassClick from "./Components/ClassClick";
import Counter from "./Components/Counter";
import EventBind from "./Components/EventBind";
import FunctionClick from "./Components/FunctionClick";
import Greet from "./Components/Greet";
import Meassage from "./Components/Meassage";
import NameList from "./Components/NameList";
import ParentComponent from "./Components/ParentComponent";
import UserGreeting from "./Components/UserGreeting";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <Meassage /> */}
      {/* <Greet name="Bruce" hero="KID">
        <p>This is the Children Prop.</p>
      </Greet>
      <Greet name="Test" hero="Hello ">
        <p>Hello </p>
      </Greet>
      <Greet name="Manas" hero="BETE">
        <p>Test</p>
      </Greet>
       <Welcome name="Bruce" hero="KID" />
      <Welcome name="Diana" hero="KID1" /> */}

      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      <NameList />
    </div>
  );
}

export default App;
