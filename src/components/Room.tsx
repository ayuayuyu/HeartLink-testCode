import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import ReconnectingWebSocket from "reconnecting-websocket";
import { Container, Input, Button, List, ListItem } from "@chakra-ui/react";
import "./index.css";

function Room() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "";
  const roomId = searchParams.get("roomId") || "";

  const [heartRate, setHeartRate] = useState<string>("");
  const socketRef = React.useRef<ReconnectingWebSocket>();

  useEffect(() => {
    const websocket = new ReconnectingWebSocket(
      `wss://hartlink-websocket-api.onrender.com/ws/${roomId}`
    );
    socketRef.current = websocket;

    websocket.onopen = () => {
      console.log("WebSocket connection established");
      // WebSocket接続が確立されたらサーバーにメッセージを送信
      websocket.send("heartRate");
    };

    socketRef.current.onmessage = (event) => {
      // setMessages((prev) => [...prev, event.data]);
      console.log("HeartRate", event.data);
      setHeartRate(event.data);
      Rate(event.data);
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [roomId]);

  const sendMessage = () => {
    if (heartRate.trim() && socketRef.current) {
      socketRef.current.send("heartRate");
    }
  };
  setInterval(() => {
    sendMessage();
  }, 4000);

  let test = "12345";

  const send = () => {
    const data = { heartRate: test }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);

    fetch("https://hartlink-websocket-api.onrender.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("ネットワーク応答が正常ではありません");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const Rate = (heartRate: string) => {
    console.log("心拍数:", heartRate);
    const hr = parseInt(heartRate, 10); // 文字列を整数に変換

    if (hr > 100) {
      ChangeAnimationSpeed(0.1);
    } else if (hr > 90) {
      ChangeAnimationSpeed(0.7);
    } else if (hr > 85) {
      ChangeAnimationSpeed(1.4);
    } else if (hr > 80) {
      ChangeAnimationSpeed(2.1);
    } else if (hr > 75) {
      ChangeAnimationSpeed(2.8);
    } else if (hr > 70) {
      ChangeAnimationSpeed(3.5);
    } else {
      ChangeAnimationSpeed(4.0);
    }
  };

  // animation-durationを変更する関数
  function ChangeAnimationSpeed(seconds: number) {
    const elements = document.querySelectorAll(
      ".animate73, .a-option73, .a-btnsub73"
    );
    elements.forEach((element) => {
      (element as HTMLElement).style.setProperty(
        "animation-duration",
        `${seconds}s`,
        "important"
      );
      (element as HTMLElement).style.setProperty(
        "-webkit-animation-duration",
        `${seconds}s`
      );
      (element as HTMLElement).style.setProperty(
        "-moz-animation-duration",
        `${seconds}s`
      );
      (element as HTMLElement).style.setProperty(
        "-o-animation-duration",
        `${seconds}s`
      );
    });
  }

  return (
    <Container>
      <Button onClick={send}>リクエスト</Button>
      {/* <List>
        {messages.map((msg, index) => (
          <ListItem key={index}>{msg}</ListItem>
        ))}
      </List> */}
      <h1>リアルタイム心拍数モニター</h1>
      <p>心拍数: {heartRate}</p>
      {/* <Button onClick={sendMessage}>send</Button> */}
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
