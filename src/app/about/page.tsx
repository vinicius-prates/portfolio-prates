export default function About() {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  let yearsOld;
  month < 10 ? (yearsOld = year - 2004) : (yearsOld = year - 2003);
  return (
    <div className="mt-12 md:px-[18vw] px-6 ">
      <div className="flex flex-col 2xl:px-72">
        <img src="yo.jpg" className="rounded my-2"/>
        <h1 className="text-2xl">About me</h1>
        <div className="flex flex-col gap-7 my-10 border-opacity-50 tracking-wide text-sm">
          <p>Hello, my name is Vinicius but A.K.A Prates. I am {yearsOld} years old, at the moment {`i'm`} working at <a href="https://www.bosch.com/" className="border-b-2 hover:opacity-30 transition-all">Bosch GmbH</a> as a Technicion of Digital Solutions - Junior. </p>
          <p>I still live my family {`(parents and sister)`}. Love them =D</p>
          <p>My hobbies are play on-line games, <a href="https://anilist.co/user/pratinhos/" className="border-b-2 hover:opacity-30 transition-all">watch anime</a> and play cello. I also like hanging out with my friends and go to the church.</p>

          <p className=" italic opacity-80">I like traveling as well, i would love to visit Switzerland and Canada.</p>
        </div>
      </div>
    </div>
  );
}
``