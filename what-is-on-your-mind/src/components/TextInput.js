const TextInput = ({setText, defaultText, sendMessage}) => {
    
    const keydown = (key) =>{
        if(key === 'Enter') sendMessage();
    }
    return (
        <input className="TextInput" type="Text" maxLength="100" defaultValue={defaultText} onChange={(e) => setText(e.target.value)} onKeyDown={(e) =>keydown(e.key)}/>
    )
}

export default TextInput
