import { Button, Text, View } from "react-native";
import PropTypes from "prop-types";
import Post from "../Components/Post";
import { useState, useEffect } from "react";
import NewPostForm from "../Components/NewPostForm";

export default function Feed({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [newId, setNewId] = useState(0);
  const navigateToLanding = () => {
    navigation.navigate("Landing");
  };
  const addNewPost = (newPost) => {
    const updatedPosts = [...posts];
    updatedPosts.push({ ...newPost, _id: newId });
    setPosts(updatedPosts);
    setNewId((id) => id + 1);
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
      <NewPostForm addNewPost={addNewPost} />
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
