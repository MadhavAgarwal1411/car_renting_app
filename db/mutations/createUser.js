import { gql } from "@apollo/client";

const SIGNUP_MUTATION = gql`
mutation CreateUser($email: String!, $password: String!, $name: String!, $phone: String!) {
  createUser(email: $email, password: $password, name: $name, phone: $phone) {
    accessToken
    refreshToken
    user {
      id
      name
      email
      phone
      role
    }
  }
}`;

export default SIGNUP_MUTATION;