import CardFrontBack from "../../components/CardFrontBack"

import './style.css'

function BoardGame(amountCards){
 
  const $HtmlCardFrontBack = CardFrontBack()
  const $HtmlContent = $HtmlCardFrontBack.repeat(amountCards)
  return /*html */ `
  <section class="board-game">
  ${$HtmlContent}
  </section>
  `
}

export default BoardGame