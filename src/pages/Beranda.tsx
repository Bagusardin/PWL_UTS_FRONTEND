import Header from "../layouts/Header";
import Rincian from "../buttons/Rincian";
import Hapus from "../buttons/Hapus";
import { useNavigate } from "react-router-dom";
import allSepatuProvider from "../provider/allSepatuProvider";

interface Sepatu {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  stock: number;
}

const Beranda = () => {
  const { data, error, isLoading } = allSepatuProvider();

  const navigate = useNavigate();
  return (
    <>
      {isLoading ? (
        <div className="flex flex-col flex-1 items-center justify-center">
          <h1 className="text-2xl font-bold mb-2 px-4">Loading...</h1>
        </div>
      ) : error ? (
        <div className="flex flex-col flex-1 items-center justify-center">
          <h1 className="text-2xl font-bold mb-2 px-4">Error</h1>
        </div>
      ) : (
        <>
          <Header />
          <div id="carousel" className="flex flex-col flex-1">
            <h1 className="text-2xl font-bold mb-2 px-4">
              Terlaris Minggu Ini
            </h1>
            <div className="flex-1 flex flex-row max-w-[640px] px-4 py-5 gap-6 overflow-auto">
              {data?.map((sepatu: Sepatu) => (
                <div
                  key={sepatu.id}
                  className="min-w-[500px] max-h-[200px] flex flex-1 flex-row rounded-2xl shadow-lg overflow-clip"
                >
                  <figure className="w-[200px] h-[200px]">
                    <img
                      src={sepatu.image_url}
                      alt={sepatu.name}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="flex flex-col flex-1 p-4 bg-white justify-center">
                    <h2 className="text-xl font-bold">{sepatu.name}</h2>
                    <p className="text-gray-500 text-sm">Rp{sepatu.price}</p>
                    <p className="text-gray-500 text-sm">
                      Stock: {sepatu.stock}
                    </p>
                    <div className="flex-1 flex flex-row gap-3 items-end justify-start">
                      <Rincian
                        onClick={() => {
                          navigate(`/sepatu/${sepatu.id}`);
                        }}
                      />
                      <Hapus onClick={() => {}} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h1 className="text-2xl font-bold mb-2 px-4">Terbaru</h1>
            <div className="flex-1 flex flex-row max-w-[640px] px-4 py-5 gap-6 overflow-auto">
              {data?.map((sepatu: Sepatu) => (
                <div
                  key={sepatu.id}
                  className="min-w-[500px] max-h-[200px] flex flex-1 flex-row rounded-2xl shadow-lg overflow-clip"
                >
                  <figure className="w-[200px] h-[200px]">
                    <img
                      src={sepatu.image_url}
                      alt={sepatu.name}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="flex flex-col flex-1 p-4 bg-white justify-center scroll-smooth">
                    <h2 className="text-xl font-bold">{sepatu.name}</h2>
                    <p className="text-gray-500 text-sm">Rp{sepatu.price}</p>
                    <p className="text-gray-500 text-sm">
                      Stock: {sepatu.stock}
                    </p>
                    <div className="flex-1 flex flex-row gap-3 items-end justify-start">
                      <Rincian
                        onClick={() => {
                          navigate(`/sepatu/${sepatu.id}`);
                        }}
                      />
                      <Hapus onClick={() => {}} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* <Header />
      <div id="carousel" className="flex flex-col flex-1">
        <h1 className="text-2xl font-bold mb-2 px-4">Terlaris Minggu Ini</h1>
        <div className="flex-1 flex flex-row max-w-[640px] px-4 py-5 gap-6 overflow-auto">
          {sepatuDump.map((sepatu: Sepatu) => (
            <div
              key={sepatu.id}
              className="min-w-[500px] max-h-[200px] flex flex-1 flex-row rounded-2xl shadow-lg overflow-clip"
            >
              <figure className="w-[200px] h-[200px]">
                <img
                  src={sepatu.image_url}
                  alt={sepatu.name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="flex flex-col flex-1 p-4 bg-white justify-center">
                <h2 className="text-xl font-bold">{sepatu.name}</h2>
                <p className="text-gray-500 text-sm">Rp{sepatu.price}</p>
                <p className="text-gray-500 text-sm">Stock: {sepatu.stock}</p>
                <div className="flex-1 flex flex-row gap-3 items-end justify-start">
                  <Rincian
                    onClick={() => {
                      navigate(`/sepatu/${sepatu.id}`);
                    }}
                  />
                  <Hapus onClick={() => {}} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-2xl font-bold mb-2 px-4">Terbaru</h1>
        <div className="flex-1 flex flex-row max-w-[640px] px-4 py-5 gap-6 overflow-auto">
          {sepatuDump.map((sepatu: Sepatu) => (
            <div
              key={sepatu.id}
              className="min-w-[500px] max-h-[200px] flex flex-1 flex-row rounded-2xl shadow-lg overflow-clip"
            >
              <figure className="w-[200px] h-[200px]">
                <img
                  src={sepatu.image_url}
                  alt={sepatu.name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="flex flex-col flex-1 p-4 bg-white justify-center scroll-smooth">
                <h2 className="text-xl font-bold">{sepatu.name}</h2>
                <p className="text-gray-500 text-sm">Rp{sepatu.price}</p>
                <p className="text-gray-500 text-sm">Stock: {sepatu.stock}</p>
                <div className="flex-1 flex flex-row gap-3 items-end justify-start">
                  <Rincian
                    onClick={() => {
                      navigate(`/sepatu/${sepatu.id}`);
                    }}
                  />
                  <Hapus onClick={() => {}} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Beranda;
