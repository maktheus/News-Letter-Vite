const Form = ({ onSubmit }) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({ name, email })
    }

    
    //Trecho de código omitido
    return <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20">
        <input type="text" placeholder="Insira seu nome..." />
        <input type="email" placeholder="Insira seu e-mail..." />
        <button type="submit">Seguir</button>
    </form>
    //teste de commmit 
}

export default Form