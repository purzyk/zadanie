import { useState } from "react";
import FormStep1 from "./components/Form/FormStep1";
import FormStep2 from "./components/Form/FormStep2";
import logo from './assets/logo.png';

function App() {
  const [view, setView] = useState("step1");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className="app">
      <main className="flex flex-col h-screen bg-background justify-center items-center">
        <div className="content bg-white text-center px-16 py-20">
          <img src={logo} className="block mx-auto mb-6" alt="logo" width="62" height="46" />
          <h1 className="text-3xl font-extrabold mb-10">
            Sign in to your account
          </h1>


          {view === "step1" ? <FormStep1 setView={setView} setPhoneNumber={setPhoneNumber} /> : <FormStep2 phoneNumber={phoneNumber} />}
        </div>
      </main>
    </div>
  );
}

export default App;
