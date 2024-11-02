import { Button } from "@chakra-ui/react";
const i = "https://hartlink-websocket-api.onrender.com/id";
const u = "https://hartlink-websocket-api.onrender.com/data";
const r = "https://hartlink-websocket-api.onrender.com/reset";
const Request = () => {
  const res = () => {
    const data = { status: "ok" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    // const url = "http://127.0.0.1:8000/status";
    const url = "https://hartlink-api.onrender.com/status";

    fetch(r, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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

  const Ids = () => {
    const a = { id: "ayumu" };
    fetch(i, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(a),
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
  const Ids1 = () => {
    const a = { id: "inoue" };
    fetch(i, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(a),
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
  const sendId1 = () => {
    const device = { id: "ayumu" };

    fetch(u, {
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
    // const url = "http://127.0.0.1:8000/id";
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
    // const url = "http://127.0.0.1:8000/status";
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
  const a = () => {
    // 70～120の範囲でランダムな数値を生成する関数
    const heartRate = Math.floor(Math.random() * (120 - 70 + 1)) + 70;

    const url = "https://hartlink-api.onrender.com/data";
    const data = { heartRate: heartRate, player: "b" };

    console.log("ただいま、メールを送信してます", data);

    fetch(u, {
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

    // 70～120の範囲でランダムな数値を生成する関数
    const heartRate1 = Math.floor(Math.random() * (120 - 70 + 1)) + 70;

    const data1 = { heartRate: heartRate1, player: "a" };

    console.log("ただいま、メールを送信してます", data);

    fetch(u, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
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
    // const url = "http://127.0.0.1:8000/status";
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
    // const url = "http://127.0.0.1:8000/status";
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
    console.log("ただいま、メールを送信してます");
    // const url = "http://127.0.0.1:8000/start";
    const url = "https://hartlink-api.onrender.com/start";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
    console.log("ただいま、メールを送信してます");
    // const url = "http://127.0.0.1:8000/end";
    const url = "https://hartlink-api.onrender.com/end";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
    console.log("ただいま、メールを送信してます");
    // const url = "http://127.0.0.1:8000/connect";
    const url = "https://hartlink-api.onrender.com/connect";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
    console.log("ただいま、メールを送信してます");
    // const url = "http://127.0.0.1:8000/reset";
    const url = "https://hartlink-api.onrender.com/reset";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
    console.log("ただいま、メールを送信してます");
    // const url = "http://127.0.0.1:8000/ok";
    const url = "https://hartlink-api.onrender.com/ok";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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

  const sendname1 = () => {
    const data = { player: "1", name: "mizuno" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    // const url = "http://127.0.0.1:8000/sendname";
    const url = "https://hartlink-api.onrender.com/sendname";

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
  const sendname2 = () => {
    const data = { player: "2", name: "tanaka" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    // const url = "http://127.0.0.1:8000/sendname";
    const url = "https://hartlink-api.onrender.com/sendname";

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
  const getname1 = () => {
    const data = { player: "1" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    // const url = "http://127.0.0.1:8000/getname";
    const url = "https://hartlink-api.onrender.com/getname";

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
  const getname2 = () => {
    const data = { player: "2" }; // dataを正しい形式で設定

    console.log("ただいま、メールを送信してます", data);
    // const url = "http://127.0.0.1:8000/getname";
    const url = "https://hartlink-api.onrender.com/getname";

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
      <Button onClick={Ids}>ID1</Button>
      <Button onClick={Ids1}>ID2</Button>
      <Button onClick={res}>reset</Button>
      <Button onClick={sendId1}>ID1_リクエスト</Button>
      <Button onClick={sendId2}>ID2_リクエスト</Button>
      <Button onClick={connectSend}>connect</Button>
      <Button onClick={okSend}>ok</Button>
      <Button onClick={OK}>OK</Button>
      <Button onClick={startSend}>start</Button>
      <Button onClick={teststart}>START</Button>
      <Button onClick={endSend}>end</Button>
      <Button onClick={testend}>END</Button>
      <Button onClick={a}>リクエスト</Button>
      <Button onClick={reset}>リセット</Button>
      <Button onClick={sendname1}>name1</Button>
      <Button onClick={sendname2}>name2</Button>
      <Button onClick={getname1}>player1</Button>
      <Button onClick={getname2}>player2</Button>
    </>
  );
};
export default Request;
