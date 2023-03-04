import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About" />
      {/* <Navbar/> */}
      <Textbox heading="Enter Your Text" btn="Convert to Upercase" btn2="Convert TO Lowercase" btn3="Clear" />
    </>
  );
}

export default App;
