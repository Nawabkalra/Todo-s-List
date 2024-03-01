import { useState,useEffect } from "react"
import Axios from 'axios'
import { Box, Button, Container, Flex, Heading, Input, Tag, Text } from "@chakra-ui/react";

function App() {
  const [task,setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001').then((response) => {
      setTaskList(response.data)
      
    })
  },)

  function submitHandler() {
    Axios.post('http://localhost:3001/api/insert',
    {task:task}).then(() => {
      
    })
  }

  function deleteHandler(tasks) {
    Axios.delete(`http://localhost:3001/api/delete/${tasks}`)
    
  }

  const Home  = {
    border :'2px',
    mt : 50,
    borderRadius : 10
  }

  const flex = {
   p:2,
   justify:'space-between',
   gap:2,
  }
  return (
    <>
    
    <Container sx={Home} centerContent fontFamily={'latin'} p={4}
    maxW="sm"
    borderWidth="2px"
    borderRadius="lg"
    shadow="md"> 
      <Heading fontFamily={"sans-serif"} p={'10px'} textAlign= "center">Todos App</Heading>

      <Flex sx={flex}>
      <Box>
        <Input type="text" name="Todo" placeholder="Enter Task" onChange={(e) => {
        setTask(e.target.value)
      }}/>
      </Box>

      <Box>
        <Button border={'2px'} colorScheme="purple" onClick={submitHandler} color="white">Submit</Button>
      </Box>
      </Flex>
      {taskList.map((value) => {
        return (<div><Tag m='4px' >
          <Text color="cyan.500">Task Name:- {value.Task}</Text>
          <Button ml="2" mt='2' mb='2' padding="4" colorScheme="red" onClick={()=>deleteHandler(value.Id)}>Delete  </Button>
          </Tag>
          </div>
        )
      })}
      </Container>
</>
  )
}

export default App
