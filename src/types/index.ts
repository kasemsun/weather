import { City, List } from "./weather"

export type optionType = {name:string,state:string,lat:number,lon:number,country:string}

export type WeatherType = {
  cod: string
  message: number
  cnt: number
  list: List[]
  city: City
}

export type SearchProps ={
  term:string
  searchOption:[]
  onInputChange:(e: React.ChangeEvent<HTMLInputElement>) => void
  onOptionSelect:(option:optionType)=>void
  onSearch:()=>void
  onCurrentLocation:()=>void
}

