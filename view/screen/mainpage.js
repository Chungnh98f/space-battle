import { setScreen } from "../../index.js";
class ScreenGame extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("mainScreen").content.cloneNode(true)
    );
    this.$displayName = this._shadowRoot.querySelector("#displayName");
    this.$loginBtn = this._shadowRoot.querySelector("#linkToLogin");
    this.$registerBtn = this._shadowRoot.querySelector("#linkToRegister");
    this.$playBtn = this._shadowRoot.querySelector("#playGame");
    this.$loginBtn.addEventListener("click", () => {
      setScreen("login");
    });
    this.$registerBtn.addEventListener("click", () => {
      setScreen("register");
    });
    this.$playBtn.addEventListener("click", () => {
      setScreen("play");
    });
  }
  // connectedCallback() {
  //   const user = firebase.auth().currentUser;
  //   if (user) {
  //     name = user.displayName;
  //     if (name) {
  //       this.$displayName.innerHTML = `Hello ${name}`;
  //       this._shadowRoot.querySelector("#linkToLogin").innerHTML = "Logout";
  //       this._shadowRoot
  //         .querySelector("#linkToLogin")
  //         .addEventListener("click", () => {
  //           firebase.auth().signOut();
  //         });
  //     }
  //   }
  // }
}
customElements.define("screen-game", ScreenGame);
