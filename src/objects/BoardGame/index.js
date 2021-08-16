import CardGame from "../../components/CardGame"
import './style.css'

function BoardGame(amountCards){
 
  const $HtmlCardGame = CardGame()
  const $HtmlContent = $HtmlCardGame.repeat(amountCards)
  return /*html */ `
  <section class="board-game">
  ${$HtmlContent}
  </section>
  `
}

export default BoardGame