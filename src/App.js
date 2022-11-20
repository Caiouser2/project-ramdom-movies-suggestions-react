import  { React, useRef, useState, useEffect } from "react";
import VisualContentApi from "./UI/VisualContentApi";
import Footer from "./UI/Footer";
import PopUpAceptPrivacyPolicy from "./UI/PopUpAceptPrivacyPolicy";
import OpnionOfUser from './components/OpnionOfUser';
import AlredyWatched from "./UI/AlredyWatched";
import MenuNav from "./UI/MenuNav";
import "./App.css";

function App() {
  //scrollY when click button
  function smoothScrollTo(endX, endY, duration) {
    const startY = window.scrollY || window.pageYOffset;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(endX, newY);
    }, 1000 / 60);
  }

  // section send informations for AlredyWatched.js 
  const [titleContent, setTitleContent] = useState();

  function reciveTitle(title) {
    if (title !== undefined) {
      setTitleContent(title); //send to Trailer.js and AlredyWatched.js
    }
  }

  const [pathImages, setPathImages] = useState();

  function recivePathImage(url) {
    if (url !== undefined) {
      setPathImages(url);
    } 
  }

  // section menu nav, show and hide
  const [visibleMenu, setVisibleMenu] = useState("");

  // checks when to show button menu or only list
  function openMenu() {
    if (visibleMenu === "") {
      setVisibleMenu('show');
    } else {
      setVisibleMenu('');
    }

  }

  //set device mobile or desktop
  const [listenerOnResize, setListenerOnResize] = useState(true); //verify if device is desktop or mobile

  function getPositions() {
    setListenerOnResize(true);

    setTimeout(() => {
      setListenerOnResize(false);
    }, 300);
  }

  window.onresize = () => {
    getPositions();
  };
  
  // get distance of elements to the top  
  const [positionYComponents, setPositionYComponents] = useState({}); // sent to MenuNav.js
  
  const refPositionDivOpnionOfUser = useRef(null);
  const refAlredyWatched = useRef(null);
  const refVisualContentApi = useRef(null);
  
  useEffect(() => {
    const getDistanceBetweenTopAndComponentOpnionOfUser = refPositionDivOpnionOfUser.current.offsetTop;
    const getDistanceBetweenTopAndComponentAlredyWatched = refAlredyWatched.current.offsetTop;
    const getDistanceBetweenTopAndComponentVisualContentApi = refVisualContentApi.current.offsetTop;

    if (listenerOnResize === true) {
      setPositionYComponents({
        positionOpnionOfUser: getDistanceBetweenTopAndComponentOpnionOfUser,
        positionAlredyWatched: getDistanceBetweenTopAndComponentAlredyWatched,
        positionVisualContentApi: getDistanceBetweenTopAndComponentVisualContentApi,
      });
    }
  }, [listenerOnResize]);

  return (
    <div>
      <header>
        <div className="align-button-and-logo">
          <h1>RAMDOM MOVIES SUGGESTIONS</h1>
            <button type="button" className={"button-open-and-close-menu"} onClick={openMenu}>
            </button>
          </div>
        <MenuNav
          objPositionsComponents={positionYComponents}
          onActiveScroll={smoothScrollTo}
          onShowMenu={visibleMenu}
          onCloseMenu={openMenu}
        />
      </header>
      <VisualContentApi
        ref={refVisualContentApi}
        onActiveScroll={smoothScrollTo}
        SendPathImageOfContent={recivePathImage}
        titlesSendToReciveTitle={reciveTitle}
      />
      <PopUpAceptPrivacyPolicy/>
      <div className="container-arrow-trailer">
        <div className="arrow-trailer"></div>
        <div className="arrow-trailer"></div>
      </div>
      <AlredyWatched
        ref={refAlredyWatched}
        titles={titleContent}
        images={pathImages}
      />
      <OpnionOfUser ref={refPositionDivOpnionOfUser} />
      <Footer/>
    </div>
  )
}

export default App;
