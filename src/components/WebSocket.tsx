import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import ReconnectingWebSocket from "reconnecting-websocket";
import { Button } from "@chakra-ui/react";
// ESM
import { destr } from "destr";

import { HeartRate } from "../types/type";

const WebSocket = () => {
  // const url = `ws://127.0.0.1:8000/ws/${roomId}`;
  const url = `wss://hartlink-api.onrender.com/ws`;

  const [heartRate, setheartRate] = useState<HeartRate>();
  const [test, setTest] = useState<HeartRate[]>([]);
  // const [heartRate, setheartRate] = useState<string>(" ");
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
      // const heart = event.data.json();
      console.log("HeartRate", event.data);
      setheartRate(destr(event.data));
      // ここのログだとundefinedになってしまう
      console.log("heartRate: ", heartRate?.heartRate1);
      // `setTest`には配列を渡すため、既存のtestに追加する形で設定
      setTest((prev) => [...prev, event.data]);
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  //   const sendMessage = () => {
  //     if (heartRate.trim() && socketRef.current) {
  //       socketRef.current.send("0");
  //     }
  //   };
  //   setInterval(() => {
  //     sendMessage();
  //   }, 4000);
  const index1 = () => {
    const d1 = { index: heartRate?.index, player: "1" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", d1);
    // const url = "http://127.0.0.1:8000/status";
    const url = "https://hartlink-api.onrender.com/indexTopicId";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(d1),
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
  const index2 = () => {
    const d1 = { index: heartRate?.index, player: "2" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", d1);
    // const url = "http://127.0.0.1:8000/status";
    const url = "https://hartlink-api.onrender.com/indexTopicId";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(d1),
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

  return (
    <>
      <Button onClick={index1}>index1を送る</Button>
      <Button onClick={index2}>index1を送る</Button>
      <h1>Hellow WebSocket</h1>
      <p>
        心拍数: {heartRate?.player1}:{heartRate?.heartRate1}
      </p>
      <p>
        心拍数: {heartRate?.player2}:{heartRate?.heartRate2}
      </p>
      <p>topicid: {heartRate?.topicId}</p>
      <p>index: {heartRate?.index}</p>
      <p>
        {test.map((req, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index}>
            {req.player1}:{req.heartRate1}
          </p>
        ))}
      </p>
    </>
  );
};

export default WebSocket;
