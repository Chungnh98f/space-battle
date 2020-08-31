import { setScreen } from "./../../index.js";

class LeaderboardScreen extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("leaderBoardScreen").content.cloneNode(true)
    );

    this.leaderBoard = [];
    this.$backBtn = this._shadowRoot.querySelector("#backBtn");
    this.$board = this._shadowRoot.getElementById("leaderBoard");

    this.$backBtn.addEventListener("click", () => {
      setScreen("gameover");
    });
  }

  async connectedCallback() {
    this.leaderBoard = [];
    await db
      .collection("score-board")
      .where("email", ">", "")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          const item = doc.data();
          console.log(item);
          this.leaderBoard.push(item);
        });
        console.log(this.leaderBoard);
        this.leaderBoard.sort((a, b) => b.score - a.score).splice(5);

        this.leaderBoard.forEach((item, index) => {
          const topPlayer = document.createElement("top-player");
          topPlayer.rank = index + 1;
          topPlayer.player = item.player;
          topPlayer.score = item.score;
          this.$board.appendChild(topPlayer);
        });
      });
  }
}

customElements.define("leaderboard-screen", LeaderboardScreen);
