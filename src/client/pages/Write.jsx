import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import InstructionsComponent from "../components/write/InstructionsComponent";
import TextAreaComponent from "../components/write/TextAreaComponent";
import { getAssignment } from "../data/api/DataReducer";

function Write() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const level = queryParams.get('level');
    const writingArea = queryParams.get('writingArea');
    dispatch(getAssignment({level,writingArea}));
  }, []);

  return (
    <main className="main-write">
      <InstructionsComponent />
      <TextAreaComponent />
    </main>
  );
}

export default Write;
