import SideImage from "./components/SideImage/SideImage";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Checkbox from "./components/Checkbox/Checkbox";
import Button from "./components/Button/Button";
import Linebreak from "./components/Linebreak/Linebreak";
import LoginOptions from "./components/LoginOptions/LoginOptions";
import Footer from "./components/Footer/Footer";
import "./App.css";
function App() {
  return (
    <>
      <SideImage />

      <div id="input-container">
        <Header text="Get Started Now" />
        <Input text="Name" type="text" placeholder="Enter your username" />
        <Input
          text="Email address"
          type="email"
          placeholder="Enter your email"
        />
        <Input
          text="Password"
          type="password"
          placeholder="Enter your password"
        />
        <Checkbox text="I agree to the terms and policy" />
        <Button text="Signup" />
        <Linebreak text="Or" />
        <LoginOptions />
        <Footer text="Have an account?" highlight="Sign In" />
      </div>
    </>
  );
}

export default App;
