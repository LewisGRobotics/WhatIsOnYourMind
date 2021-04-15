import {useState, useEffect} from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaPoo } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

const Thought = ({id , thoughtText}) => {
    //const [upvoteCount, setUpvoteCount] = useState(0);
    //const [downvoteCount, setDownvoteCount] = useState(0);
    //const [gibberishCount, setGibberishCount] = useState(0);

    const [upvote, setUpvote] = useState(false);
    const [downvote, setDownvote] = useState(false);
    const [gibberish, setGibberish] = useState(false);
    const [upvoteClassName, setupvoteClassName] = useState("nocolorIcon");
    const [downvoteClassName, setdownvoteClassName] = useState("nocolorIcon");
    const [gibberishClassName, setgibberishClassName] = useState("nocolorIcon");

    const onUpvote = () => {
        if(!gibberish && !downvote){
            setUpvote(!upvote);            
        }
    }

    const onDownvote = () => {
        if(!upvote && !gibberish){
            setDownvote(!downvote);            
        }
    }

    const onGibberish = () => {
        if(!upvote && !downvote){
            setGibberish(!gibberish);            
        }        
    }

    // Update after render, useState is asynchronous!!
    useEffect (()=>{
        setupvoteClassName(upvote ? "upvoteIcon" : "nocolorIcon");
        setdownvoteClassName(downvote ? "downvoteIcon" : "nocolorIcon");
        setgibberishClassName(gibberish ? "gibberishIcon" : "nocolorIcon");
    }, [upvote, downvote, gibberish])

    return (
        <div className="container">  
            <h3>
                {thoughtText + " "}
                <FaArrowUp className={upvoteClassName} onClick = {() => onUpvote()} data-tip data-for="upvoteTip"/>
                <ReactTooltip id="upvoteTip" place="top" effect="solid">
                    This is great / funny / amazing!
                </ReactTooltip>

                <FaArrowDown className={downvoteClassName} onClick = {() => onDownvote()}  data-tip data-for="downvoteTip"/>
                <ReactTooltip id="downvoteTip" place="top" effect="solid">
                    This is not amusing
                </ReactTooltip>

                <FaPoo className={gibberishClassName} onClick = {() => onGibberish()} data-tip data-for="gibberishTip"/>
                <ReactTooltip id="gibberishTip" place="top" effect="solid">
                    This is gibberish
                </ReactTooltip>
            </h3>
            
        </div>
    )
}

export default Thought
