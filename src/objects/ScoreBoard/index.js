import PlayerName from "../../components/PlayerName"
import "./style.css"

function ScoreBoard(){
  return /*html*/`
  <header class='score-board'> 

  ${PlayerName('player 1')}
  ${PlayerName('player 2')}

  </header>
  `

}
export default ScoreBoard