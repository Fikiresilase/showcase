import useData from "./useData";

    export interface Genres {
        id:number;
        name:string;
        image_background :string;
        selectedGener:Genres;
               
     }
    
       
        const useGeners  = () => useData<Genres>('/genres')

export default  useGeners;