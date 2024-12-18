import { Button, Text } from "react-native";
import PropTypes from "prop-types";

export default function Post({ username, body, _id, time, togglePostDetail }) {
  Post.propTypes = {
    username: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    _id: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
  };

  return (
    <>
      <Text>Author:{username}</Text>
      <Text>Body: {body}</Text>
      <Button title="Post Details" onPress={() => togglePostDetail(_id)} />
    </>
  );
}
