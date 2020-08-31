function updateScore(score) {
  const user = firebase.auth().currentUser;
  const newScore = {
    score: score,
    player: user ? user.username : "Anonymous",
    email: user ? user.email : "",
  };
  db.collection("score-board").add(newScore);
}

export { updateScore };
