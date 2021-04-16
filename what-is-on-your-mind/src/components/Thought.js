import {useState, useEffect} from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaPoo } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

const Thought = ({thought, database}) => {    
    const [upvote, setUpvote] = useState(false);
    const [downvote, setDownvote] = useState(false);
    const [gibberish, setGibberish] = useState(false);
    
    const [upvoteClassName, setupvoteClassName] = useState("nocolorIcon");
    const [downvoteClassName, setdownvoteClassName] = useState("nocolorIcon");
    const [gibberishClassName, setgibberishClassName] = useState("nocolorIcon");

    const onUpvote = () => {
        if(!gibberish && !downvote){
            // I'm considering the state before toggling because the following set is async.
            var upvoteCount = upvote ? thought.upvote : thought.upvote + 1;
            setUpvote(!upvote);
            database.ref('messages/' + thought.id).set({
                text: thought.text,
                id: thought.id,
                upvote: upvoteCount,
                downvote: thought.downvote,
                gibberish: thought.gibberish
            });
        }
    }

    const onDownvote = () => {
        if(!upvote && !gibberish){
            // I'm considering the state before toggling because the following set is async.
            var downvoteCount = downvote ? thought.downvote : thought.downvote + 1;
            setDownvote(!downvote);
            database.ref('messages/' + thought.id).set({
                text: thought.text,
                id: thought.id,
                upvote: thought.upvote,
                downvote: downvoteCount,
                gibberish: thought.gibberish
            });
        }
    }

    const onGibberish = () => {
        if(!upvote && !downvote){
            // I'm considering the state before toggling because the following set is async.
            var gibberishCount = gibberish ? thought.gibberish : thought.gibberish + 1;
            setGibberish(!gibberish);
            database.ref('messages/' + thought.id).set({
                text: thought.text,
                id: thought.id,
                upvote: thought.upvote,
                downvote: thought.downvote,
                gibberish: gibberishCount
            });      
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
                {thought.text + " "}
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
