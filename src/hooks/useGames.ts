import useData from "./useData";
import { Genres } from "./useGeners";
 export interface Platform {
    id:number;
    name:string;
    slug:string;
   
 }
 export interface Games {
        id:number;
        name:string;
        background_image:string;
        parent_platforms:{platform:Platform}[];
        metacritic:number;
        
    }
   
const useGames = (selectedGener:Genres|null,selectedPlatform:Platform|null)=>  useData<Games>('./games',
    {params:{genres:selectedGener?.id,platforms:selectedPlatform?.id }},[selectedGener?.id,selectedPlatform?.id])

export default useGames;