import {useReducer, useRef, useEffect} from "react";
import {ReviewButtons} from "../review-buttons/component.jsx";

const DEFAULT_FORM_VALUE = {
    name: "",
    text: "",
    rating: 5
};

const SET_NAME = "setName";
const SET_TEXT = "setText";
const SET_RATING = "setRating";
const RESET_FORM = "resetForm";


function reducer(state, {type, payload} = {}) {
    console.log("in reducer", payload);
    switch(type) {
        case SET_NAME:
            return {...state, name: payload};
        case SET_TEXT:
            return {...state, text: payload};
        case SET_RATING:
            return {...state, rating: payload};
        case RESET_FORM:
            return DEFAULT_FORM_VALUE;
        default:
            return state;
    }
}

export const NewReviewForm = (props) => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE)
    const formRef = useRef(form);
    console.log(formRef.current);

    return (
        <div>
            <div>
                <span>Name</span>
                <input
                    type={"text"}
                    placeholder={"Name"}
                    value={form.name}
                    onChange={(event) =>
                        dispatch({type: SET_NAME, payload: event.target.value})}
                />
            </div>
            <div>
                <span>Text</span>
                <input
                    type={"text"}
                    placeholder={"Text"}
                    value={form.text}
                    onChange={(event) =>
                        dispatch({type: SET_TEXT, payload: event.target.value})}
                />
            </div>
            <div>
                <span>Rating</span>
                <ReviewButtons onClick={(value) =>
                    dispatch({type: SET_RATING, payload: value})}/>
            </div>
            <button onClick={() => dispatch({type: RESET_FORM})}>Submit</button>
        </div>
    )
}