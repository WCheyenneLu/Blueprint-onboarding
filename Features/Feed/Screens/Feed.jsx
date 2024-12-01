import { Button, Text, View } from "react-native";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import NewPostForm from "../Components/NewPostForm";
import Post from "../Components/Post";
import PostDetail from "../Components/PostDetail";

export default function Feed({ navigation }) {
  const GIVEN_POSTS = [
    {
      _id: 0,
      username: "Apollo",
      body: "This is some text that the author wrote",
      time: "Jan 16th",
    },
    {
      _id: 1,
      username: "Bob",
      body: "This is some text that the author wrote",
      time: "Jan 17th",
    },
    {
      _id: 2,
      username: "Apollo",
      body: "This is some text that the author wrote",
      time: "Jan 18th",
    },
    {
      _id: 3,
      username: "Bob",
      body: "This is some text that the author wrote",
      time: "Jan 19th",
    },
  ];
  const [posts, setPosts] = useState([]);
  const [newId, setNewId] = useState(0);
  const [postDetail, setPostDetail] = useState(null);
  const navigateToLanding = () => {
    navigation.navigate("Landing");
  };
  // const navigatePostDetails = () => {
  //   navigation.navigate("PostDetails");
  // };
  const togglePostDetail = (postId) => {
    console.log(postId);
    if (postDetail) {
      setPostDetail(null);
    } else {
      setPostDetail(postId);
    }
  };
  const addNewPost = (newPost) => {
    const updatedPosts = [...posts];
    const date = new Date();
    updatedPosts.push({
      ...newPost,
      _id: newId,
      time: `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
    });
    setPosts(updatedPosts);
    setNewId((id) => id + 1);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Posts</Text>
      {!postDetail && postDetail !== 0 && (
        <NewPostForm addNewPost={addNewPost} />
      )}

      {posts.map(
        (post) =>
          !postDetail &&
          postDetail !== 0 && (
            <Post
              key={post._id}
              username={post.username}
              body={post.body}
              _id={post._id}
              time={post.time}
              togglePostDetail={togglePostDetail}
              // goPostDetails={navigatePostDetails}
            />
          )
      )}
      {postDetail !== null && postDetail !== undefined && (
        <PostDetail
          username={posts[postDetail].username}
          body={posts[postDetail].body}
          time={posts[postDetail].time}
          _id={posts[postDetail]._id}
          togglePostDetail={togglePostDetail}
        />
      )}

      <Button title="To Landing" onPress={navigateToLanding} />
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
