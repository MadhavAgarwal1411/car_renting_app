
import { gql } from "@apollo/client";

const GET_ACCESS_TOKEN = gql`mutation GetAccessToken($refreshToken: String!) {
  getAccessToken(refreshToken: $refreshToken)
}`;

export default GET_ACCESS_TOKEN;