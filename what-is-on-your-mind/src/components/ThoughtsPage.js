import Thought from './Thought';

const ThoughtsPage = ({thoughts}) => {
        return (
        <div>
            <h2>
                Other people have this in mind:
            </h2>
            {thoughts.map((thought,index) => (
                <Thought key={thought.id} thoughtText={thought.text}/>
            ))}
        </div>
    )
}

export default ThoughtsPage
