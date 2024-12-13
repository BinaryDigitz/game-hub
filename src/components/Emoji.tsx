import bullsEye from "../assets/bulls-eye.webp"
import thumbsUp from "../assets/thumbs-up.webp"
import meh from "../assets/meh.webp"
interface Props{
    rating: number
}
interface Rating{
    src: string;
    alt:string
}
const Emoji = ({rating} : Props) => {
    if(rating < 3) return ;
const emojiMap:{ [key: number] : Rating} = {
    3: {src: meh, alt:"meh"},
    4: {src: thumbsUp, alt:"recomended"},
    5: {src: bullsEye, alt:"exceptional"},
}
  return (
    <img src= {emojiMap[rating].src} className="size-4" alt=" rating" />
  )
}

export default Emoji
