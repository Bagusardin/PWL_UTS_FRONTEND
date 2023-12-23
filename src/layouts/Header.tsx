import shoes from "../assets/Fonte-White-1.png";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white flex flex-row h-[200px] overflow-hidden rounded-lg">
      <div className="flex-1 py-8 px-4">
        <h1 className="text-4xl font-bold">Sepatu.com</h1>
        <p className="text-lg mt-2">
          Platform jual beli sepatu terbaik di Indonesia.
          <br />
          Your choices, your style.
        </p>
      </div>
      <div className="w-[200px] self-center">
        <figure className="object-top">
          <img src={shoes} alt="shoes" className="w-[200px] object-cover" />
        </figure>
      </div>
    </header>
  );
};

export default Header;
