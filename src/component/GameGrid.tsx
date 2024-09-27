
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGeners";
import { Platform } from "../hooks/usePlatform";

interface Props {
      selectedGener:Genres|null;
      selectedPlatform: Platform|null;
}

const GameGrid = ({selectedGener,selectedPlatform}:Props) => {
  const {data,error,isLoading} =useGames(selectedGener,selectedPlatform)
  const skeletonCards=[1,2,3,4,5,6]
  
  return (
    <>
   <Text>{error && 'no games'}</Text>
    <SimpleGrid columns={{sm:1 , md:2 ,lg:3}} padding={10} spacing={5}>
      
     { isLoading && skeletonCards.map(skeleton=><GameCardContainer><GameCardSkeleton key={skeleton}/></GameCardContainer>)}
   { data.map((data)=><GameCardContainer key={data.id}><GameCards  games={data} /></GameCardContainer>)
}    
     
    </SimpleGrid>
    </> 
   
  )
}

export default GameGrid
