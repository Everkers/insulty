import Ilustration from 'assets/images/Saly-20.png'
const FullPageLoading= ()=>{
    return(
        <div className="w-full flex justify-center items-center bg-gray-900 h-screen">
            <img class='h-60 animate-pulse' src={Ilustration} alt='ilustration-loading'/>
        </div>
    )
}
export default FullPageLoading