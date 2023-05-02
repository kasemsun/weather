import Search from "./component/Search";
import Weather from "./component/Weather";
import useWeather from "./hook/useWeather";

function App(): JSX.Element {
  const {
    term,
    searchOption,
    weather,
    onInputChange,
    onSearch,
    onOptionSelect,
    onCurrentLocation,
  } = useWeather();
  return (
    <main className="flex flex-col items-center justify-center h-screen ">
      <section
        className="w-full max-w-[700px] lg:max-w-[900px] xl:max-w-[1024px] flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded p-8 flex-grow"
      >
        <Search
          term={term}
          searchOption={searchOption}
          onInputChange={onInputChange}
          onSearch={onSearch}
          onOptionSelect={onOptionSelect}
          onCurrentLocation={onCurrentLocation}
        />

        {weather ? (
          <>
            <Weather data={weather}/>
          </>
        ) : null}
      </section>
    </main>
  );
}

export default App;
