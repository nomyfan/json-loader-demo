import JsonData from "./data.fjs";

function traverseProperties() {
  const logger = document.getElementById("logger");
  if (logger) {
    Object.entries(JsonData).forEach(([key, value]) => {
      logger.innerHTML += `<li><b>${key} = ${value}</b></li>`;
    });
  }
}

traverseProperties();
