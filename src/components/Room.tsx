import React, { useEffect, useState, useRef } from "react";
import { Container, Input, Button, List, ListItem } from "@chakra-ui/react";
import Request from "./Request";
import WebSocket from "./WebSocket";
import "./index.css";

function Room() {
  return (
    <Container>
      <Request />
      <WebSocket />
      <h1>リアルタイム心拍数モニター</h1>
      <div>
        <img
          className="on a-main animate animate73"
          src="src/components/sinzou.png"
          alt="sinzou"
          width="50px"
        />
      </div>
    </Container>
  );
}

export default Room;
