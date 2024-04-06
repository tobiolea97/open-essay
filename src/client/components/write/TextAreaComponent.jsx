import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, { useEffect, useState } from 'react';
import { storeMessage, setStatus } from "../../data/api/OpenAiReducer";
import { review } from "../../data/api/OpenAiReducer";

export const TextAreaComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [paragraphCount, setParagraphCount] = useState(0);
    const [error, setError] = useState("");

    const goBack = () => {
        navigate("/home");
    }
    
    useEffect(() => {
        setError("");
    }, []);

    const handleClick = async (event) => {
        event.preventDefault();
        if(inputValue === "" || inputValue === undefined || wordCount < 4 || paragraphCount < 1)
        {
            setError("Please, write a at least 100 words and 3 paragraphs.");
            return;
        }
        // futher validation

        dispatch(storeMessage(inputValue.split(/\n\n/)));
        // dispatch(setStatus("processing")); this is not neccesary because the status is set in the reducer
        navigate("/review");
        await dispatch(review(inputValue));
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        setWordCount(inputValue.split(/\s+/).filter((word) => word !== "").length);
    }, [inputValue]);

    useEffect(() => {
        setParagraphCount(inputValue.split(/\n\n/).filter((word) => word !== "").length);
    }, [inputValue]);

    return (
        <>
            <div className="text-area">
                <textarea
                    className="text-area-input"
                    placeholder="Write your essay.."
                    onChange={handleChange}
                    value={inputValue}></textarea>
            </div>
            <div className="control-panel">
                <span>{error}</span>
                <em>{wordCount} words / {paragraphCount} paragraphs</em>
                <a onClick={goBack}>Go back</a>
                <button className="button" onClick={handleClick}>Submit</button>
            </div>
        </>
    )
}

export default TextAreaComponent;