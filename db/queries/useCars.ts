import { gql } from "@apollo/client";

const GET_CARS = gql`query Cars {
  cars {
    id
    brand
    model
    images
    price
    ownerId
    available
  }
}`
;

export default GET_CARS;