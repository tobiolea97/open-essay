import React, { useEffect } from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { review } from "../api/OpenAiReducer";

export const TextAreaComponent = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("");
    
    useEffect(() => {
        setInputValue("default input lorem ipsum");
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();

        if(inputValue === "" || inputValue === undefined)
        {
            return;
        }

        console.log(inputValue);

        await dispatch(review(inputValue));
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form className="text-area" onSubmit={onSubmit}>
            <textarea
                className="text-area-input"
                placeholder="Write your essay.."
                rows="20"
                onChange={handleChange}
                value={inputValue}></textarea>
            <button className="button" type="submit">Submit</button>
            <em> 256 words</em>
        </form>
    )
}

export default TextAreaComponent;