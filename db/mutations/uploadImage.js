import { gql } from "@apollo/client";

const UPLOAD_IMAGE_MUTATION = gql`
  mutation uploadImage($file: Upload!) {
    uploadImage(file: $file) {
      success
      url
    }
  }`;

export default UPLOAD_IMAGE_MUTATION;