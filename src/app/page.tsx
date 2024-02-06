export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16 my-12 xl:px-[40rem] text-center">
      <h1 className="font-bold text-3xl"> Welcome!</h1>
      <div className="flex flex-col gap-8 items-center">
        <img src="/avatar.jpg" className="w-72 rounded-xl " />
        <p className="text-lg">
          My name is Vinicius Prates, i am a brazilian fullstack developer and a
          future software engineer.
        </p>
      </div>
      <div>
        <ul className="flex flex-row gap-10">
          <li  className="p-1 "><a href="/about">About</a></li>          
          <li className="p-1 "><a href="/tools-languages">Tools & Languages</a></li>          
          <li className="p-1  "><a href="/gear">Gear</a></li>          
        </ul>
        </div>
    </div>
  );
}
