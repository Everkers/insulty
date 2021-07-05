import Ilustration from 'assets/images/Saly-39.png'
const Loading= ()=>{
    return(
        <div className="flex justify-center items-center h-28 w-29">
            <img class='h-60 animate-pulse' src={Ilustration} alt='ilustration-loading'/>
            <h3>Loading your stuff be patient.</h3>
        </div>
    )
}
export default Loading