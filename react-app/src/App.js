import { YMaps } from "@pbe/react-yandex-maps";
import PageMap from "./pages/PageMap.jsx";
import React from "react";
import MapComponent from "./components/MapComponent.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <YMaps query={{ load: "package.full", lang: 'en_RU' }}> <PageMap /> </YMaps> */}
        <MapComponent />

      </header>
    </div>
  );
}

export default App;
