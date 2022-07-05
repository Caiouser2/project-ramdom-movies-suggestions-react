import { useState } from 'react';
import VisualContentApi from './UI/VisualContentApi';
import Footer from './UI/Footer';
import ImportantsInformations from './components/ImportantsInformations';
import WarningAdultContent from './components/WarningAdultContent';
import PrivacyPolicy from './components/PrivacyPolicy';
import PopUpAceptPrivacyPolicy from './UI/PopUpAceptPrivacyPolicy';
import './App.css';

function App() {
  const [showAndHideImportantsInformations, setShowAndHideImportantsInformations] = useState(false);
  
  const [visibilityPrivacyPolicy, setVisibilityPrivacyPolicy] = useState('hide');

  function showImportantsInformations(show) {
    setShowAndHideImportantsInformations(show); //send true or for component ImportantsInformations 
  }

  function hideImportantsInformations(hide) {
    setShowAndHideImportantsInformations(hide); //send false for component ImportantsInformations  
  }

  function showPrivacyPlicy() {
    setVisibilityPrivacyPolicy('show');
  }

  function hidePrivacyPlicy() {
    setVisibilityPrivacyPolicy('hide');
  }

  return (
    <div>
      <header>
        <h1 title="Nome do site: RAMDOM MOVIES SUGGESTION">RAMDOM MOVIES SUGGESTIONS</h1>
      </header>
      <WarningAdultContent/>
      <VisualContentApi/>
      <ImportantsInformations importantsInformations={showAndHideImportantsInformations} unActiveImportantsInformations={hideImportantsInformations}/>
      <PrivacyPolicy openCardPrivacyPolicy={showPrivacyPlicy} closeCardPrivacyPolicy={hidePrivacyPlicy} activeCard={visibilityPrivacyPolicy}/>
      <PopUpAceptPrivacyPolicy openPrivacyPlicy={showPrivacyPlicy}/>
      <Footer visiblePrivacyPolicy={showPrivacyPlicy} activeImportantsInformations={showImportantsInformations}/>
    </div>

  );
}

export default App;
