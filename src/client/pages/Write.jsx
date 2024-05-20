import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import InstructionsComponent from "../components/write/InstructionsComponent";
import TextAreaComponent from "../components/write/TextAreaComponent";
import { getAssignment } from "../data/api/DataReducer";
import Spinner from "../components/SpinnerComponent";
import {useNavigate} from "react-router-dom";

function Write() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openai = useSelector((state) => state.OpenAi);
  const currentAssignment = useSelector((state) => state.data.currentAssignment);
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const level = queryParams.get('level');
    const writingArea = queryParams.get('writingArea');
    dispatch(getAssignment({level,writingArea}));
  }, []);

  const goBack = () => {
    navigate("/home");
  }

  return (
    <>
    { openai.status === "loading" && <Spinner /> }
    <main className="main-write">
      { openai.status !== "loading" && currentAssignment === null &&
        <div className="error-message">
          <p>Seems like you wrote too much and we run out of assignments. </p>
          <p>Please try again later.</p>
          <a onClick={goBack}>Go back</a>
        </div>
      }
      { openai.status !== "loading" && currentAssignment !== null &&
        <>
          <InstructionsComponent />
          <TextAreaComponent />
        </>
      }
    </main>
    </>
  );
}

export default Write;
