import { Button } from "@chakra-ui/react";

const Request = () => {
  const sendId1 = () => {
    const device = { id: "ayumu" };
    // const url1 = "http://127.0.0.1:8000/id";
    const url = "https://hartlink-api.onrender.com/id";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(device),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("ネットワーク応答が正常ではありません");
        }
        return response.json();
      })
      //ここのdataにレスポンスの値が入っている
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const sendId2 = () => {
    const device = { id: "inoue" };
    // const url1 = "http://127.0.0.1:8000/id";
    const url = "https://hartlink-api.onrender.com/id";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(device),
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

  const okSend = () => {
    const data = { status: "ok" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    // const url1 = "http://127.0.0.1:8000/status";
    const url = "https://hartlink-api.onrender.com/status";

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

  const send = () => {
    const data = { heartRate: "7.8", id: "ayumu" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    // const url1 = "http://127.0.0.1:8000/data";
    const url = "https://hartlink-api.onrender.com/data";

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

  const resend = () => {
    const data = { heartRate: "9.29", id: "inoue" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    // const url1 = "http://127.0.0.1:8000/data";
    const url = "https://hartlink-api.onrender.com/data";

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

  const startSend = () => {
    const data = { status: "start" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    // const url1 = "http://127.0.0.1:8000/status";
    const url = "https://hartlink-api.onrender.com/status";

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

  const endSend = () => {
    const data = { status: "end" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    // const url1 = "http://127.0.0.1:8000/status";
    const url = "https://hartlink-api.onrender.com/status";

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
  const teststart = () => {
    const data = { status: "start" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    // const url1 = "http://127.0.0.1:8000/start";
    const url = "https://hartlink-api.onrender.com/start";

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

  const testend = () => {
    const data = { status: "end" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    // const url1 = "http://127.0.0.1:8000/end";
    const url = "https://hartlink-api.onrender.com/end";

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
  const connectSend = () => {
    const data = { status: "end" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    // const url1 = "http://127.0.0.1:8000/connect";
    const url = "https://hartlink-api.onrender.com/connect";

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
  const reset = () => {
    const data = { status: "end" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    // const url1 = "http://127.0.0.1:8000/connect";
    const url = "https://hartlink-api.onrender.com/reset";

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
  const OK = () => {
    const data = { status: "ok" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    // const url1 = "http://127.0.0.1:8000/connect";
    const url = "https://hartlink-api.onrender.com/ok";

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
  return (
    <>
      <Button onClick={sendId1}>ID1_リクエスト</Button>
      <Button onClick={sendId2}>ID2_リクエスト</Button>
      <Button onClick={connectSend}>connect</Button>
      <Button onClick={okSend}>ok</Button>
      <Button onClick={OK}>OK</Button>
      <Button onClick={startSend}>start</Button>
      <Button onClick={teststart}>START</Button>
      <Button onClick={endSend}>end</Button>
      <Button onClick={testend}>END</Button>
      <Button onClick={send}>リクエスト1</Button>
      <Button onClick={resend}>リクエスト2</Button>
      <Button onClick={reset}>リセット</Button>
    </>
  );
};
export default Request;
