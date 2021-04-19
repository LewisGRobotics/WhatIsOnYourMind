import Thought from './Thought';
import GenericButton from './GenericButton';

const ThoughtsPage = ({thoughts, database}) => {
    const numberOfEntriesToShow = 8;

    var thoughtArray = [];
    const createThoughtArray = async () =>{
        
        // Random thought selection, also ponderating votes
        if(thoughts.length > numberOfEntriesToShow){
            // Create an array of random numbers, with maximum values of the amount of thoughts
            const numberArray = [];
            while(numberArray.length < numberOfEntriesToShow){
                // Select a random thought
                const index = Math.floor(Math.random() * thoughts.length);
                // Ponderation: Check if (upvote - downvote) is greater than a random number from 0-9.
                if(Math.floor(Math.random()*10) < (thoughts[index].upvote - thoughts[index].downvote) - thoughts[index].gibberish){
                    // Check if the thought is not gibberish, is not already added and is not undefined
                    if(thoughts[index].gibberish < 4 && !numberArray.includes(index) && thoughts[index] !== undefined){
                        numberArray.push(index);
                        thoughtArray.push(thoughts[index])
                    }   
                }
            }
        }
        else{
            thoughtArray = thoughts;
        }
    }
    createThoughtArray()

    const reload = () => {
        window.location.reload();
    }

    return(
        <div>
            <h2>
                Other people have this in mind:
            </h2>
            {thoughtArray.map((thought,index) => (<Thought key={index} thought={thought} database={database}/>))}
            <GenericButton onClick={reload} text="Show me other thoughts!"/>
        </div>
    )
}

export default ThoughtsPage
