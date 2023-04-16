import { FooterComponent } from "..//Molcule/FooterComponent";
import { HeaderComponent } from "../Molcule/HeaderComponent";
import { MainComponent } from "../Molcule/MainComponent";
import Loading from "../Orgazm/Loading";
import { MainTemplate } from "../Template/MainTemplate";
import React, { useEffect, useRef, useState } from "react";

const MainPage = () => {
  // parameters
  let isVisible = true;
  let timer: NodeJS.Timer;
  const updateProgress = () => {
    setProgress(p => p + 1);
  }
  const stopInterval = () => {
    if(intervalRef.current){
        clearInterval(intervalRef.current);
    }
  }

  // hooks
  const [proggres, setProgress] = useState<number>(0);
  const [visibleFlg, setFlg] = useState<boolean>(true);
  let intervalRef = useRef<NodeJS.Timer | null>(null);
  useEffect(() => {
    if (proggres === 100) {
      setFlg(false);
      stopInterval();
      console.log("end load")
    }
  }, [proggres]);

  useEffect(() => {
    // timer
    intervalRef.current = setInterval(updateProgress, 10);
  }, []);

  return (
    <>
      <Loading progress={proggres} isVisible={visibleFlg} />
      {
        visibleFlg ?
        "" :
        <MainTemplate
        headerChild={<HeaderComponent />}
        mainChild={<MainComponent />}
        footerChild={<FooterComponent />}
      />
      }
    </>
  );
};

export default MainPage;
