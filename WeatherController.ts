import {NextFunction, Request, Response } from "express";
import axios,{ AxiosResponse } from "axios";
import { WeatherError } from "./middlewares/errorHandlers";
import {WEATHER_ERROR_MESSAGE} from "./constante/errormessages";

 
export class WeatherController {
  private API_KEY: string;
 
  constructor(apiKey: string){
    this.API_KEY = apiKey;
  }
 
  public async getWeather(req: Request, res: Response , next:NextFunction): Promise<void>{
    const city: string = req.params.city;
    console.log('$$$$$', city)
    console.log(this.API_KEY);
    
    try{
      const response : AxiosResponse = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${this.API_KEY}&q=${city}`
      );
      const data= response.data;
      res.json(data);
    }catch(error){
          next(new WeatherError(WEATHER_ERROR_MESSAGE));
    }
 
  }
 
}