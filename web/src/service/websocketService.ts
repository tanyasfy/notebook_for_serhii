import { ref, Ref } from "vue";

let connection: WebSocket;

const setupWebsocket = (
  onMessage: (message: { [key: string]: any }) => void,
  connectionState: Ref<boolean>
) => {
  const protocol = 'ws';
  connection = new WebSocket(`${protocol}://${location.hostname}:3000/ws`);

  connection.onopen = () => {
    connectionState.value = true;
  };

  connection.onmessage = (ev) => {
    const message = JSON.parse(ev.data);

    if (message == null) {
      return
    }

    onMessage(message)
  };

  connection.onclose = () => {
    connectionState.value = false;
    setTimeout(() => setupWebsocket(onMessage, connectionState), 10000)
  }
}

export const provideWebsockeService = (): void => {
  const connectionState = ref<boolean>(false);
  const onMessage = (message: any) => {
    const type = message.type;
    const action = message.action;

    if (type && action) {
      const payload = message.payload;
      if (type === 'article' && action === 'update') {
        console.log(payload)
      }
    }
  }

  setupWebsocket(onMessage, connectionState)
}
