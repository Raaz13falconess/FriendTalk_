import React, {useEffect, useState} from "react";
import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState()
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    setUser(userInfo)
    if (!userInfo) {
      navigate("/chats")
    }
  }, [navigate])
  return (
    <Container maxW="xl" centerContent >
      <Box
        display="flex"
        justifyContent="center"
        p={2}
        bg={"#ddc9f0"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          textAlign="center"
          fontFamily="Work sans"
          color="#1c2ca3"
          fontSize="4xl"
        >
          FriendTalk
        </Text>
      </Box>
      <Box
     
        p={4}
        bg={"#ddc9f0"}
        w="100%"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded" >
          <TabList
            mb="1em"
            
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}> Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
             <Login />
            </TabPanel>
            <TabPanel>
            <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;