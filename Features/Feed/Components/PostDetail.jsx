import { Button, Text } from "react-native";
import PropTypes from "prop-types";

export default function PostDetail({
  username,
  body,
  _id,
  time,
  togglePostDetail,
}) {
  PostDetail.propTypes = {
    username: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    _id: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
  };

  return (
    <>
      <Text>Author:{username}</Text>
      <Text>Body: {body}</Text>
      <Text>Time: {time}</Text>
      <Button title="Back to Posts" onPress={() => togglePostDetail(null)} />
    </>
  );
}
