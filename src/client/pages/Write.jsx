import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import InstructionsComponent from "../components/write/InstructionsComponent";
import TextAreaComponent from "../components/write/TextAreaComponent";
import { getAssignment } from "../data/api/DataReducer";
import Spinner from "../components/SpinnerComponent";

function Write() {
  const dispatch = useDispatch();
  const openai = useSelector((state) => state.OpenAi);
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const level = queryParams.get('level');
    const writingArea = queryParams.get('writingArea');
    dispatch(getAssignment({level,writingArea}));
  }, []);

  return (
    <>
    { openai.status === "loading" && <Spinner /> }
    <main className="main-write">
      <InstructionsComponent />
      <TextAreaComponent />
    </main>
    </>
  );
}

export default Write;
