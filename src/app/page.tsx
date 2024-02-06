
export default function Home() {

  const date = new Date();
  const month = date.getMonth()
  const year = date.getFullYear();
  let yearsOld
  month < 10 ?  yearsOld = year - 2004 : yearsOld = year - 2003

  return (
    <div className="flex flex-col items-center gap-16 my-12 md:px-[20vw] text-center px-6">
      <h1 className="hidden md:flex font-bold text-3xl"> Welcome!</h1>
      <div className="flex flex-col gap-8 items-center 2xl:px-72">
        <img src="/avatar.jpg" className="w-72 rounded-xl " />
        <p className="text-lg tracking-wide">
          My name is Vinicius Prates {`(${yearsOld} years old)`}, i am a brazilian fullstack developer and a
          future software engineer.
        </p>
      </div>
        <ul className="flex md:flex-row flex-col md:gap-10 gap-4 font-bold w-full justify-center text-sm md:text-md">
          <li className="flex"><a className="p-4 drop-shadow-md  hover:drop-shadow-xl rounded-lg bg-[whitesmoke] hover:bg-black transition-all duration-200 text-black hover:text-white w-full" href="/about">About</a></li>          
          <li className="flex"><a className="p-4 drop-shadow-md  hover:drop-shadow-xl rounded-lg bg-[whitesmoke] hover:bg-black transition-all duration-200 text-black hover:text-white w-full" href="/tools-languages">Tools & Languages</a></li>          
          <li className="flex"><a className="p-4 drop-shadow-md  hover:drop-shadow-xl rounded-lg bg-[whitesmoke] hover:bg-black  transition-all duration-200 text-black hover:text-white w-full" href="/gear">Gear</a></li>          
        </ul>
        
    </div>
  );
}
