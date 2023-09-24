import axios from "axios";
import { useState } from "react";
import Footer from '../components/Footer';

export default function Home() {
  const [title, setTitle] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [titleDetails, setTitleDetails] = useState(null);
  const [streamingInfo, setStreamingInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const getTitle = async () => {
    try {
      setLoading(true);
      const res = await axios.get("api/search/", {
        params: { title },
      });
      const { data } = res;
      setSearchResults(data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const getTitleDetails = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get("api/details/", {
        params: { id },
      });
      const { data } = res;
      setLoading(false);
      setTitleDetails(data);
      setStreamingInfo(data.streamingAvailability.country.US);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background min-h-screen w-screen">
    <div className="flex flex-col md:px-12 px-0 relative bg-background font-sans items-center h-[70vh]">
      <h1 className="text-6xl text-xxs xs:text-6xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold font-sans text-primary mt-20 my-2.5 pb-0.5 pt-6">
        ReelRadar
      </h1>
      <h2 className="text-active text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-light text-blue-900 mt-4 mb-10 mx-20 font-sans items-center text-center">
      Stream Smarter. Your One-Stop Spot for Finding Movies and TV Shows.
      </h2>
      <form
        className="sm:mx-auto mt-10 mx-10 mb-10 justify-center sm:w-full sm:flex"
        onSubmit={(e) => {
          getTitle();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          className="flex w-full sm:w-2/5 rounded-md px-5 py-3 text-base text-background font-bold border-gray-300 focus:ring-primary focus:ring-active"
          placeholder="What's on your radar..."
          onChange={(e) => {
            setTitle(e.target.value);
            setSearchResults(null);
            setTitleDetails(null);
          }}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3 bg-background">
          <button
            className="block w-full rounded-md px-5 py-3 bg-active text-base text-primary bg-blue-800 text-white rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10 border-gray-300"
            type="submit" 
          >
            {loading ? <>Searching..</> : <>Explore!</>}
          </button>
        </div>
      </form>
      {searchResults && (
        <div className="mt-10 bg-background w-screen px-10">
          <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 bg-background">
            {searchResults
              .filter((item) => item.imageurl && item.imageurl[0]) // Remove results with no images
              .map((item) => (
                <div key={item.title} className="pt-6">
                  <div className="flow-root bg-light rounded-lg px-4 pb-8">
                    <div className="-mt-6">
                      <div className="flex items-center justify-center">
                        <span className="p-2">
                          {item.imageurl && item.imageurl[0] && (
                             <img
                             src={item.imageurl && item.imageurl[0]}
                             onError={(e) => {
                               e.target.onerror = null; // Prevent infinite loop
                               e.target.src = "../assets/default-image.png";
                             }}
                             className="w-full h-full rounded-lg"
                             alt={item.title}
                           />
                          )}
                        </span>
                      </div>
                      <div className="text-center justify-center items-center">
                        <h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
                          {item.title}
                        </h3>
                        <span className="mt-2 text-sm text-active block">
                          {item.released} <br></br>
                          {item.genre[0]}
                        </span>
                        <p className="mt-4 text-sm leading-relaxed text-secondary block">
                          {item.synopsis}
                        </p>
                        {titleDetails?.imdbid === item.imdbid ? (
                          <span className="mt-4 block max-w-2xl text-primary">
                            {streamingInfo ? (
                              <>
                                Available on:
                                <span className="flex mt-2 text-base gap-2 justify-center">
                                  {streamingInfo.map((item) => {
                                    return (
                                      <a
                                        href={item.url}
                                        className="text-active underline"
                                      >
                                        {item.platform}
                                      </a>
                                    );
                                  })}
                                </span>
                              </>
                            ) : (
                              <>No matches found</>
                            )}
                          </span>
                        ) : (
                          <button
                            className="mt-5 text-md text-active"
                            onClick={() => {
                              getTitleDetails(item.imdbid);
                            }}
                          >
                            Available on... 
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
        </div>
        
      )}
 <Footer />
    </div>
    </div>
    
    
  );
}