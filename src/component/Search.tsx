import { optionType, SearchProps } from "../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'

const Search = ({
  term,
  searchOption,
  onInputChange,
  onOptionSelect,
  onSearch,
  onCurrentLocation
}: SearchProps): JSX.Element => {

  return (
    <>
        <h1 className="text-4xl mt-5 font-thin">
          Weather <strong className="font-black">Forecast</strong>
        </h1>
        <p className="text-thin">
          Enter below a place you want to know the weather
        </p>
      
      <div className="relative mt-10">
        <input
          type="text"
          className="px-2 rounded-l-md border-2 border-white py-1 
            md:w-[350px] lg:w-[500px] xl:w-[700px]"
          onChange={onInputChange}
          value={term}
        />

        <button
          className="rounded-r-md border-2 border-white hover:border-zinc-500s hover:text-zinc-500 text-zinc-1 px-2 py-1 cursor-pointer text-white"
          onClick={onSearch}
        >
          search
        </button>
        <button className="mx-3" onClick={onCurrentLocation}>
          <FontAwesomeIcon size="xl" color="white" icon={faLocation} />
        </button>
        <ul className="absolute top-9 bg-white ml-l rounded-b-md">
          {searchOption.map((option: optionType, index: number) => (
            <li key={index} >
              <button
                className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
                onClick={() => onOptionSelect(option)}
              >
                {option.name}, {option.country}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>


  );
}

export default Search;