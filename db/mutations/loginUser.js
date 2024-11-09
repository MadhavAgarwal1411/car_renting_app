
import { gql } from "@apollo/client";

const LOGIN_MUTATION = gql`
mutation Mutation($loginUserEmail2: String!, $loginUserPassword2: String!) {
  loginUser(email: $loginUserEmail2, password: $loginUserPassword2) {
    accessToken
    refreshToken
    user {
      id
      name
      email
      phone
    }
  }
}`;

export default LOGIN_MUTATION;