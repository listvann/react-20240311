import { Review } from "../review/component";

export const Reviews = ({reviews}) => {
  if(!reviews?.length){
      return null;
  }
  return (<ul>
    {reviews.map(review =>
        // eslint-disable-next-line react/jsx-key
        <li>
            <Review text={review.text}/>
        </li>
    )}
    </ul>)
}