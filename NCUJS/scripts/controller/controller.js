import doNetworkCall from "../services/service.js";

window.addEventListener("load", bindEvents);

function bindEvents() {
  getData();
}

async function getData() {
  const data = await doNetworkCall();
  
}
