import Ilustration from 'assets/images/Saly-20.png'
const FullPageLoading= ()=>{
    return(
        <div className="w-full absolute top-0 left-0 flex justify-center items-center bg-white dark:bg-gray-900 h-screen">
            <img class='h-60 animate-pulse' src={Ilustration} alt='ilustration-loading'/>
        </div>
    )
}
export default FullPageLoading