import Keycloak from "keycloak-js";

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak({
  url: "https://localhost:8080/auth/",
  realm: "dilip-home",
  clientId: "rifiutoo-webapp"
});

export default keycloak;
