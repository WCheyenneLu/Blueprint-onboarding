import { Button, TextInput } from "react-native";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function NewPostForm() {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");

  const handleAddPost = () => {
    addNewPost({ username, body });
    setUsername("");
    setBody("");
  };

  return (
    <>
      <TextInput
        placeholder="Who is this?"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder="What are you Printing?"
        onChangeText={setBody}
        value={body}
      />
      <Button title="Print" onPress={handleAddPost} />
    </>
  );
}

NewPostForm.propTypes = {
  addNewPost: PropTypes.func.isRequired,
};