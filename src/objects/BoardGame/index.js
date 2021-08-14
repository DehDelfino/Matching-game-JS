import CardGame from "../../components/CardGame"
import './style.css'

function BoardGame(amountCards){
 
  const $HtmlCardGame = CardGame()
  const $HtmlContent = $HtmlCardGame.repeat(amountCards)
  return `
  <section class="board-game">
  ${$HtmlContent}
  </section>
  `
}

export default BoardGame