import {useDispatch} from "react-redux";
import { useEffect } from "react";
import { getLevels, getWritingAreas, getWritings } from "../data/api/DataReducer";

import StartWritingPanelComponent from "../components/home/StartWritingPanelComponent";
import WritingHistoryComponent from "../components/home/WritingHistoryComponent";


function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLevels());
    dispatch(getWritingAreas());
    dispatch(getWritings());
  }, []);
  
  return (
    <main className="main-home">
      <StartWritingPanelComponent />
      <WritingHistoryComponent />
    </main>
  );
}

export default Home;
