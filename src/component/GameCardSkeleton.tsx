import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
    <Card >
        <Skeleton height='200px' />
        <SkeletonText></SkeletonText>
    </Card>
  )
}

export default GameCardSkeleton
