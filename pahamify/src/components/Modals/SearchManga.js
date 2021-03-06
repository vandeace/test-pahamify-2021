import React, { useState } from "react";
import Search from "components/Search";
import axios from "axios";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const SearchManga = (props) => {
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [keyword, setKeyword] = useState("");

  const searchCharacters = async (keyword) => {
    setNotFound(false);
    const res = await axios.get(
      `http://localhost:5000/api/v1/manga?search=${keyword}`
    );
    console.log(res, "res");
    setIsSearching(false);
    // Set results state
    if (res.data.length !== 0) {
      setResults(res.data);
    } else {
      setNotFound(true);
    }
  };
  const toggle = () => {
    props.setModal(!props.setModal);
  };

  const clearData = () => {
    setResults([]);
    setKeyword("");
  };
  return (
    <div>
      <Modal
        isOpen={props.modal}
        style={customStyles}
        contentLabel="Modal Add"
        ariaHideApp={false}
      >
        <div className="" style={{ minWidth: 400, width: 600 }}>
          <div className="block">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={toggle}
              className="cursor-pointer"
            />
          </div>
          <h2 className="text-4xl font-mono font-extrabold text-blue-primary text-center my-3">
            Add Manga
          </h2>
          <Search
            isSearching={isSearching}
            setIsSearching={setIsSearching}
            results={results}
            setResults={setResults}
            searchCharacters={searchCharacters}
            keyword={keyword}
            setKeyword={setKeyword}
          />
          {results.length !== 0 && (
            <button
              onClick={clearData}
              className="py-2 px-4 mr-3 rounded-md bg-red text-white focus:outline-none"
            >
              Clear Data
            </button>
          )}
          <div className="" style={{ height: 400, overflowY: "auto" }}>
            {results.length !== 0 &&
              results.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-light p-4 rounded-xl flex flex-row justify-between my-2"
                >
                  <p className="text-lg flex justify-items-center items-center w-3/4">
                    {item.title}
                  </p>
                  <div className="">
                    <button className="py-2 px-4 mr-3 rounded-md bg-teal  text-white focus:outline-none">
                      Add To List
                    </button>
                  </div>
                </div>
              ))}
            {notFound && (
              <h1 className="text-red text-3xl text-center">Data Not Found</h1>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SearchManga;
