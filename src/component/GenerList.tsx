import { Button, HStack, Image, List, ListItem,Spinner, } from "@chakra-ui/react";
import useData from "../hooks/useData";
import {Genres} from "../hooks/useGeners";
interface Props {
  onSelectGener : (gener:Genres) => void;
  selectedGenre: Genres|null;
}
const GenerList = ({onSelectGener,selectedGenre}:Props) => {
    const {data,isLoading,error} = useData<Genres>('/genres')
    if (error) return null;
    if (isLoading) return <Spinner/>
  return (
    <List>{
        data.map((genre) =>  
          <ListItem key={genre.id} marginY='5px'><HStack gap='10px'>
            <Image boxSize='30px' src={genre.image_background}/>
            <Button variant='link'  fontWeight={genre.id==selectedGenre?.id ?'bold':'normal'} onClick={()=> onSelectGener(genre)}>{genre.name}</Button>
          {genre.name} </HStack>
          </ListItem>
          )
    }
    </List>
  )
}

export default GenerList
