import { Box } from "@mui/system";
import LandingPageLayout from "components/layout/LandingPageLayout";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";

// setTimeout(() => {
//     socket.emit('msg', "test");
// }, 5000)

const socket = io("192.168.68.101:2000", {
    transports: ['websocket'],
    forceNew: true,
    upgrade: false,
  });
  
function LandingPage() {

    // Connect to socket.io server
    useEffect(() => {
        function onConnect() {
            console.log("connected");
        }
        
        function onError(err) {
            // the reason of the error, for example "xhr poll error"
            console.log(err.message);
          
            // some additional description, for example the status code of the initial HTTP response
            console.log(err.description);
          
            // some additional context, for example the XMLHttpRequest object
            console.log(err.context);
        }

        socket.on("connect", onConnect);
        socket.on("connect_error", onError);

          return () => {
            socket.off('connect', onConnect);
            socket.off('connect_error', onError);
          };
    }, [])

    // For editing the size of the pad
    const [keyScale, setKeyScale] = useState("7.5em");
    var buttonStyle = {
        minWidth: keyScale,
        minHeight: keyScale,
        border: "3px solid",
        borderRadius: "20%",
    };

    // for key event

    function key_press(key){
        socket.emit("key_press", key)
    }

    return (
        <LandingPageLayout>
            <Box
                display={"flex"}
                justifyContent={"start"}
                alignItems={"center"}
                minHeight={"100svh"}
                flexDirection={"column"}
                className="bg-slate-100"
                paddingTop={5}
            >  
                {/* 1st Row */}
               <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    rowGap={3}
                    columnGap={3}
                    width={"90%"}
                    marginBottom={3}
               >
                
                    <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onTouchStart={() => key_press("key_C1")}
                        onTouchEnd={() => key_press("key_C1")}
                    >
                        <Typography fontSize={"2em"}>
                            C
                        </Typography>
                    </Button>
                    <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onTouchStart={() => key_press("key_D1")}
                        onTouchEnd={() => key_press("key_D1")}
                    >
                        <Typography fontSize={"2em"}>
                            D
                        </Typography>
                    </Button>
                    <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onTouchStart={() => key_press("key_E1")}
                        onTouchEnd={() => key_press("key_E1")}
                    >
                        <Typography fontSize={"2em"}>
                            E
                        </Typography>
                    </Button>
                    <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onTouchStart={() => key_press("key_F1")}
                        onTouchEnd={() => key_press("key_F1")}
                    >
                        <Typography fontSize={"2em"}>
                            F
                        </Typography>
                    </Button>
                    <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onTouchStart={() => key_press("key_G1")}
                        onTouchEnd={() => key_press("key_G1")}
                    >
                        <Typography fontSize={"2em"}>
                            G
                        </Typography>
                    </Button>
               </Box>
               {/* 2nd Row */}
               <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    rowGap={3}
                    columnGap={3}
                    width={"90%"}
                    marginBottom={3}
               >
                    <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onTouchStart={() => key_press("key_A2")}
                        onTouchEnd={() => key_press("key_A2")}
                    >
                        <Typography fontSize={"2em"}>
                            A
                        </Typography>
                    </Button>
                    <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onTouchStart={() => key_press("key_B2")}
                        onTouchEnd={() => key_press("key_B2")}
                    >
                        <Typography fontSize={"2em"}>
                            B
                        </Typography>
                    </Button>
                    <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onTouchStart={() => key_press("key_C2")}
                        onTouchEnd={() => key_press("key_C2")}
                    >
                        <Typography fontSize={"2em"}>
                            C
                        </Typography>
                    </Button>
                    <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onTouchStart={() => key_press("key_D2")}
                        onTouchEnd={() => key_press("key_D2")}
                    >
                        <Typography fontSize={"2em"}>
                            D
                        </Typography>
                    </Button>
                    <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onTouchStart={() => key_press("key_E2")}
                        onTouchEnd={() => key_press("key_E2")}
                    >
                        <Typography fontSize={"2em"}>
                            e
                        </Typography>
                    </Button>
               </Box>
               {/* 3rd Row */}
               <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    rowGap={3}
                    columnGap={3}
                    width={"90%"}
                    marginBottom={3}
               >
                    <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onTouchStart={() => key_press("key_F3")}
                        onTouchEnd={() => key_press("key_F3")}
                    >
                        <Typography fontSize={"2em"}>
                            F
                        </Typography>
                    </Button>
                    <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onTouchStart={() => key_press("key_G3")}
                        onTouchEnd={() => key_press("key_G3")}
                    >
                        <Typography fontSize={"2em"}>
                            G
                        </Typography>
                    </Button>
                    <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onTouchStart={() => key_press("key_A3")}
                        onTouchEnd={() => key_press("key_A3")}
                    >
                        <Typography fontSize={"2em"}>
                            A
                        </Typography>
                    </Button>
                    <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onTouchStart={() => key_press("key_B3")}
                        onTouchEnd={() => key_press("key_B3")}
                    >
                        <Typography fontSize={"2em"}>
                            B
                        </Typography>
                    </Button>
                    <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onTouchStart={() => key_press("key_C3")}
                        onTouchEnd={() => key_press("key_C3")}
                    >
                        <Typography fontSize={"2em"}>
                            C
                        </Typography>
                    </Button>
               </Box>
            </Box>
        </LandingPageLayout>
    )
}

export default LandingPage;
