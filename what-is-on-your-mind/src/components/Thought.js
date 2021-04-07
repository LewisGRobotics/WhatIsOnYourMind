const Thought = ({id , thoughtText}) => {
    return (
        <div className="container">  
            <h3>
                {id + ": " + thoughtText}
            </h3>
        </div>
    )
}

export default Thought
