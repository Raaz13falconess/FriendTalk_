import { Box } from "@chakra-ui/layout";
// import "./styles.css";
// import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";
import SingleChat from "./SingleChat";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      marginTop={2}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="#ddc9f0"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
      color="black"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}  />
    </Box>
  );
};

export default ChatBox;