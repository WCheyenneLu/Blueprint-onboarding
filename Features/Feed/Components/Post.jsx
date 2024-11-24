import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Post({ username, body }) {
  Post.propTypes = {
    username: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  };

  return (
    <>
      <Text>Author:{username}</Text>
      <Text>Body: {body}</Text>
    </>
  );
}
