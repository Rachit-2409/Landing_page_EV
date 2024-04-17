import { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
let herodata = [
  {text1 : "Dive into", text2 : "what you love"},
  {text1 : "Indulge", text2 : "Your Passions"},
  {text1 : "Give in to", text2 : "Your Passions"}
]

const [heroCount, SetHeroCount] = useState(2);
const [playstatus, setplaystatus] = useState(false);

  return (
    <>
     <Navbar />
      <Background  playstatus={playstatus} heroCount={heroCount}/>
     <Hero  setplaystatus={setplaystatus} herodata={herodata[heroCount]} heroCount={heroCount} SetHeroCount={SetHeroCount} playstatus={playstatus}/>
    </>
  )
}

export default App
