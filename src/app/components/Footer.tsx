export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="border-t-2 text-sm py-4 border-[whitesmoke] opacity-50 tracking-wide flex flex-col gap-4 ">
      <p>© {year} Vinicius Prates. All rights reserved</p>
      <ul className="text-xs flex flex-row gap-4 justify-center">
        <li >
          <a href="https://github.com/vinicius-prates" className="hover:border-b-2" target="blank">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vinipratess/" className="hover:border-b-2" target="blank">Linkedin</a>
        </li>
        <li>
          <a href="https://www.instagram.com/vinipratess/" className="hover:border-b-2" target="blank"> Instagram</a>
        </li>
      </ul>
    </div>
  );
};
