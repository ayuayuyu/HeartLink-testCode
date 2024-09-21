import { Container, Button } from "@chakra-ui/react";

const Request = () => {
  let test = "12345";

  const send = () => {
    const data = { heartRate: test }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);

    fetch("http://127.0.0.1:8000/data", {
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

  let reset = "0";

  const resend = () => {
    const data = { value: reset }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);

    fetch("http://127.0.0.1:8000/reset", {
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
    fetch("http://127.0.0.1:8000/max", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify("0"),
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
    </>
  );
};
export default Request;
