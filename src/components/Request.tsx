import { Container, Button } from "@chakra-ui/react";

const Request = () => {
  let test = "12345";

  const send = () => {
    const data = { heartRate: test }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    const url1 = "http://127.0.0.1:8000/data";
    const url = "https://hartlink-websocket-api.onrender.com/data";

    fetch(url, {
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

  let reset = "0.0";

  const resend = () => {
    const data = { value: reset }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);

    fetch("https://hartlink-websocket-api.onrender.com/reset", {
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

  let max = "0";

  const maxsend = () => {
    fetch("https://hartlink-websocket-api.onrender.com/max", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify("0.0"),
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
      <Button onClick={send}>リクエスト</Button>
      <Button onClick={resend}>resetリクエスト</Button>
      <Button onClick={maxsend}>resetリクエスト</Button>
    </>
  );
};
export default Request;
