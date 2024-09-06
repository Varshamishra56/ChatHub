import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <Box w="100%" h="100vh" bg="gray.50">
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && (
          <Box
            w={{ base: "100%", md: "30%" }}
            h="100%"
            mr={{ base: 0, md: "10px" }}
            mb={{ base: "10px", md: 0 }}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            overflowY="auto"
          >
            <MyChats fetchAgain={fetchAgain} />
          </Box>
        )}
        {user && (
          <Box
            flex={1}
            h="100%"
            bg="white"
            borderRadius="md"
            boxShadow="md"
            ml={{ base: 0, md: "10px" }}
            mt={{ base: "10px", md: 0 }}
            overflowY="auto"
          >
            <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Chatpage;
