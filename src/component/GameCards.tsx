import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { Games } from '../hooks/useGames'
import PlatformIcon from './PlatformIcon';
import CriticScore from './CriticScore';


interface Props {
    games:Games;
    
}

const GameCards = ({games}:Props) => {
   
  return (
   
   <Card>
    <Image src={games.background_image}></Image>
    <CardBody>
        <Heading fontSize={'2xl'}>
            {games.name}
        </Heading>
        <HStack justifyContent={'space-between'}>  
        <PlatformIcon platforms={games.parent_platforms.map(p=>p.platform)}/>
        <CriticScore score={games.metacritic}></CriticScore>
        </HStack>
      
    </CardBody>
    
   </Card>
  )
}

export default GameCards
