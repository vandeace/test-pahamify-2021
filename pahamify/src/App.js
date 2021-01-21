import NavBar from "components/Navbar";
import Search from "components/Search";

const getKeyWord = async () => {
  const word = "cat and dog eat";
  const wordLength = word.split(" ").length;
  const arrayWordShift = word.split(" ");
  const arrayWordPop = word.split(" ");
  const arrayPopSlice = word.split(" ");
  let splitResult = [];
  let popResult = [];
  let popAndShift = [];
  console.log(wordLength, "wordLength");
  console.log(arrayWordPop, "arrayWord");
  //remove with pop
  for (var i = 0; i < wordLength; i++) {
    arrayWordPop.pop();
    splitResult.push(arrayWordPop.join(" "));
  }
  //remove with slice
  for (var j = 0; j < wordLength; j++) {
    arrayWordShift.shift();
    popResult.push(arrayWordShift.join(" "));
  }
  for (var k = 0; k < wordLength; k++) {
    arrayPopSlice.shift();
    arrayPopSlice.pop();
    popAndShift.push(arrayPopSlice.join(" "));
  }
  console.log(splitResult, "splitResult");
  console.log(popResult, "popResult");

  const joinedArray = [
    word,
    ...word.split(" "),
    ...splitResult,
    ...popResult,
    ...popAndShift,
  ];
  const filtered = joinedArray.filter(function (el) {
    return el !== "";
  });
  console.log(filtered, "filtered");
  const finalArray = [...new Set(filtered)];
  console.log(finalArray, "finalArray");
};

function App() {
  return (
    <div className="">
      <NavBar />

      <div className="bg-janda pt-5" style={{ height: "90vh" }}>
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col h-full w-full ">
              <Search />
              <div
                className="bg-white shadow-lg text-blue-primary relative rounded-3xl font-mono  2xl:p-2 p-4 "
                style={{ height: 600, overflowY: "auto" }}
              >
                <h1 className="text-3xl my-3 text-center font-bold">
                  Manga List
                </h1>
                <div className="border border-gray-light p-4 rounded-xl flex flex-row justify-between my-2">
                  <h1 className="text-lg flex justify-items-center items-center">
                    Anime Title
                  </h1>
                  <div className="">
                    <button
                      className="py-2 px-4 mr-3 rounded-md bg-teal  text-white focus:outline-none"
                      onClick={() => getKeyWord()}
                    >
                      Update
                    </button>
                    <button className="py-2 px-4 mr-3 rounded-md bg-red text-white focus:outline-none">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" bg-white shadow-lg rounded-3xl font-mono text-blue-primary"
              style={{ height: 700 }}
            >
              <h1 className="text-3xl my-3 text-center font-bold">
                Manga Detail
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
