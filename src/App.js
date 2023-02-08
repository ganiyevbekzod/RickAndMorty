import { Outlet } from "react-router";
import "./app.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
   <div className="container ">
    <div className="mt-4">
    <Outlet/> 
    </div>
   </div>
    </>
  );
}

export default App;
