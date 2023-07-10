import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
  return (
    <>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
};

export default App;
