function Header({ type = 'mtd' }) {
  return (
    <header className="font-bold md:flex items-center z-50 w-full dark:bg-black py-2">
      <div className="py-4 xs:py-2 pl-4 md:w-4/12 flex flex-nowrap justify-between items-center relative mb-2">
        <h1 className="sm:text-vwh1 xl:text-6xl mt-0 xs:pl-3 pl-0 xs:mt-0 w-1/2 xs:justify-start justify-sraer text-2xl flex leading-none items-baseline text-black dark:text-white font-black uppercase whitespace-nowrap lead-source-main-title silk-lead-source-main-title">
          CSR
          <span className=" text-lg font-normal ml-1">{type}</span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
