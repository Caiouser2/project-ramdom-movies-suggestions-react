import { useState } from 'react';
import VisualContentApi from './UI/VisualContentApi';
import Footer from './UI/Footer';
import ImportantsInformations from './components/ImportantsInformations';
import WarningAdultContent from './components/WarningAdultContent'
import './App.css';

function App() {
  const [showAndHideImportantsInformations, setShowAndHideImportantsInformations] = useState(false);
  
  function showImportantsInformations(show) {
    setShowAndHideImportantsInformations(show); //send true or for component ImportantsInformations 
  }

  function hideImportantsInformations(hide) {
    setShowAndHideImportantsInformations(hide); //send false for component ImportantsInformations  
  }

  return (
    <div>
      <header>
        <h1 title="Nome do site: RAMDOM MOVIES SUGGESTION">RAMDOM MOVIES SUGGESTIONS</h1>
      </header>
      <WarningAdultContent/>
      <VisualContentApi/>
      <ImportantsInformations importantsInformations={showAndHideImportantsInformations} unActiveImportantsInformations={hideImportantsInformations}/>
      <Footer activeImportantsInformations={showImportantsInformations}/>
    </div>

  );
}

export default App;
