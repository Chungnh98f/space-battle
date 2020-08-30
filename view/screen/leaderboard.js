import { setScreen } from "./../../index.js";

class LeaderboardScreen extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("LeaderboardScreen").content.cloneNode(true)
    );
    this._shadowRoot.querySelector("#backBtn").addEventListener("click", () => {
      setScreen("gameover");
    });
  }
}

customElements.define("leaderboard-screen", LeaderboardScreen);
