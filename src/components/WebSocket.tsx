import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import ReconnectingWebSocket from "reconnecting-websocket";
import { Container, Input, Button, List, ListItem } from "@chakra-ui/react";
import Rate from "./HeartRateAnimation";

const WebSocket = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "";
  const roomId = searchParams.get("roomId") || "";

  const url1 = `ws://127.0.0.1:8000/ws/${roomId}`;
  const url = `wss://hartlink-websocket-api.onrender.com/ws/${roomId}`;

  const [heartRate, setheartRate] = useState<string>("");
  const socketRef = useRef<ReconnectingWebSocket>();

  useEffect(() => {
    const websocket = new ReconnectingWebSocket(url);
    socketRef.current = websocket;

    websocket.onopen = () => {
      console.log("WebSocket connection established");
      // WebSocket接続が確立されたらサーバーにメッセージを送信
      websocket.send("0.0");
    };

    socketRef.current.onmessage = (event) => {
      console.log("HeartRate", event.data);
      setheartRate(event.data);
      Rate(event.data);
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [roomId]);

  //   const sendMessage = () => {
  //     if (heartRate.trim() && socketRef.current) {
  //       socketRef.current.send("0");
  //     }
  //   };
  //   setInterval(() => {
  //     sendMessage();
  //   }, 4000);

  return (
    <>
      <h1>Hellow WebSocket</h1>
      <p>心拍数: {heartRate}</p>
    </>
  );
};

export default WebSocket;
