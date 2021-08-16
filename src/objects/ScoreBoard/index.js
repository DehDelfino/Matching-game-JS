import PlayerName from "../../components/PlayerName"

function ScoreBoard(){
  return /*html*/`
  <header class='score-board'> 

  ${PlayerName('player 1')}
  ${PlayerName('player 2')}
  
  </header>
  `

}
export default ScoreBoard