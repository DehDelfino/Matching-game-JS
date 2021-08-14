import './style.css'

function PlayerScore(acertos){
  return`
  <div class='container-player'>
    <p class='player-name'>Player1</p>
      <div class='container-score'>
        <div class='player-score'></div>
        <div class='player-score'></div>
        <div class='player-score'></div>
      </div>
    <div> VS</div>

    <div class='container-score'>
      <div class='player-score'></div>
      <div class='player-score'></div>
      <div class='player-score'></div>
    </div>

    <p class='player-name'>Player2</p>

  </div>
  `
}

export default PlayerScore