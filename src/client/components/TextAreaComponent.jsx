import React, { useEffect } from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { review } from "../api/OpenAiReducer";

export const TextAreaComponent = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [paragraphCount, setParagraphCount] = useState(0);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setError("");
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        if(inputValue === "" || inputValue === undefined || wordCount < 4 || paragraphCount < 1)
        {
            setError("Please, write a at least 100 words and 3 paragraphs.");
            return;
        }
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
        <form className="text-area" onSubmit={onSubmit}>
            <textarea
                className="text-area-input"
                placeholder="Write your essay.."
                onChange={handleChange}
                value={inputValue}></textarea>
            <button className="button" type="submit">Submit</button>
            <span>{error}</span>
            <em>{wordCount} words / {paragraphCount} paragraphs</em>
        </form>
    )
}

export default TextAreaComponent;