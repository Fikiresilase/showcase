
import {  Grid, GridItem, Show   } from '@chakra-ui/react'
import NavBar from './component/NavBar'
import GameGrid from './component/GameGrid'
import GenerList from './component/GenerList'
import { useState } from 'react'
import { Genres } from './hooks/useGeners'
import PlatformSelector from './component/PlatformSelector'
import { Platform } from './hooks/usePlatform'

function App() {
  const [selectedGener,setSelectedGener]=useState<Genres|null>(null);
  const [selectedPlatform,setSelectedPlatform] = useState <Platform|null>(null) ;
  
 


  return (
    <Grid templateAreas={{
       base:'"nav " " main"',
       lg:'"nav nav" "aside main"'
    }     
    }
    templateColumns= {
      {
        base:'1fr' ,
        lg:'200px 1fr'

      }

    }>
      <GridItem area="nav">
        <NavBar/>
      </GridItem>
      <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenerList selectedGenre={selectedGener} onSelectGener={(gener)=>setSelectedGener(gener)}/>
      </GridItem>
      </Show>
      <GridItem area="main" >

        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform)=>setSelectedPlatform(platform)} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGener={selectedGener} />
       
      </GridItem>
      </Grid>
    
   
  )
}

export default App
