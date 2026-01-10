const iframe = document.getElementById("frame");
const input = document.getElementById("url");

const connection = new BareMux.BareMuxConnection("/baremux/worker.js");

const wispUrl =
  (location.protocol === "https:" ? "wss" : "ws") +
  "://" + location.host + "/wisp/";

document.getElementById("go").onclick = async () => {
  let url = input.value;

  if (!url.includes(".")) {
    url = "https://www.google.com/search?q=" + encodeURIComponent(url);
  } else if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  if (!await connection.getTransport()) {
    await connection.setTransport("/epoxy/index.mjs", [{ wisp: wispUrl }]);
  }

  iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
};
