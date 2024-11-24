import { Button, Text, View } from "react-native";
import PropTypes from "prop-types";
import Post from "../Components/Post";

export default function Feed({ navigation }) {
  const navigateToLanding = () => {
    navigation.navigate("Landing");
  };
  const GIVEN_POSTS = [
    {
      _id: 0,
      author: "Apollo",
      body: "This is some text that the author wrote",
    },
    {
      _id: 1,
      author: "Bob",
      body: "This is some text that the author wrote",
    },
    {
      _id: 2,
      author: "Apollo",
      body: "This is some text that the author wrote",
    },
    {
      _id: 3,
      author: "Bob",
      body: "This is some text that the author wrote",
    },
  ];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Posts</Text>
      {GIVEN_POSTS.map((post) => (
        <Post key={post._id} username={post.author} body={post.body} />
      ))}
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
