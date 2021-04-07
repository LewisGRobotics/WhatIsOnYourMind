import Thought from './Thought';
import GenericButton from './GenericButton';

const ThoughtsPage = ({thoughts}) => {
    const numberOfEntriesToShow = 8;
    let thoughtArray = [];

    // Select random thoughts if the database is too big.
    if(thoughts.length > numberOfEntriesToShow){
        // Create an array of random numbers, with maximum values of the amount of thoughts
        const numberArray = [];
        while(numberArray.length < numberOfEntriesToShow){
            const index = Math.floor(Math.random() * thoughts.length);
            if(!numberArray.includes(index) && thoughts[index] !== undefined){
                numberArray.push(index);
                thoughtArray.push(thoughts[index]);
            }
        }
        console.log(numberArray);
        
    }
    else{
        thoughtArray = thoughts;
    }

    const reload = () => {
        window.location.reload();
    }

    return(
        <div>
            <h2>
                Other people have this in mind:
            </h2>
            {thoughtArray.map((thought,index) => (<Thought id={thought.id} thoughtText={thought.text}/>))}
            <GenericButton onClick={reload} text="Show me other thoughts!"/>
        </div>
    )
}

export default ThoughtsPage
