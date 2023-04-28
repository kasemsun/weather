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
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-orange-400 h-[100vh]">
      <section
        className="w-full h-full md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1024px]
      flex flex-col items-center
      bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg round"
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
