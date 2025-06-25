const onePiece = ['luffy', 'zoro', 'sanji', 'brook']

export function Mapping(){
    return(
        <div>
            <div className="font-bold mt-5">Mapping basic</div>
            <ul>
                {onePiece.map((straw, index) => (
                    <li key={index}>
                        {straw}
                    </li>
                ))}
            </ul>
        </div>
    )
}