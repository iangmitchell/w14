const Column = ({width, card, title, content })=>{
    const widthStyle = `column is-${width}`
    return(
        <div class={widthStyle}>
            <div class={card}>
                <div class='title'>
                    {title}
                </div>
                <div class='content'>
                    {content}    
                </div> 
            </div>
        </div>
    )
}
export default Column