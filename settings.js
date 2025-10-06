/** Minimalny settings.js z logowaniem **/
module.exports = {
  // ładne zapisywanie flow
  flowFilePretty: true,

  // (opcjonalnie) sekret do szyfrowania credów node’ów
  credentialSecret: process.env.CREDENTIAL_SECRET || "change-me",

  // **Logowanie do edytora (https://my-garden-assistant.onrender.com)**
  adminAuth: {
    type: "credentials",
    users: [
      {
        username: "admin",
        // <- WSTAW TU HASH Z KROKU 1
        password: "$2y$08$vwGwmSqMwLiBJpJFrkXgOeEt6bHbc9F.MxpWULaY.QKebQFqLEIDa",
        permissions: "*"
      }
    ]
  },

  // **(Opcjonalnie) Zabezpieczenie endpointów HTTP (np. /ui)**
  // Usuń/zakomentuj ten blok, jeśli chcesz zostawić Dashboard bez logowania.
  httpNodeAuth: {
    user: "user",
    // ten sam hash co wyżej lub inny
    pass: "$2y$08$vwGwmSqMwLiBJpJFrkXgOeEt6bHbc9F.MxpWULaY.QKebQFqLEIDa"
  },

  // Zostawiamy minimalny kontekst globalny
  functionGlobalContext: {},

  // Wyłączamy „Projects” w edytorze (żeby było prościej)
  editorTheme: { projects: { enabled: false } }
};
