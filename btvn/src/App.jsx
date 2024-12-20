import SideImage from "./assets/SideImage/SideImage";
import Header from "./assets/Header/Header";
import Input from "./assets/Input/Input";
import Checkbox from "./assets/Checkbox/Checkbox";
import Button from "./assets/Button/Button";
import Linebreak from "./assets/Linebreak/Linebreak";
import LoginOptions from "./assets/LoginOptions/LoginOptions";
import Footer from "./assets/Footer/Footer";
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
