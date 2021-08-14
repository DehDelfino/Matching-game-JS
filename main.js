import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import CardGame from "./src/components/CardGame"
import PlayerScore from './src/components/PlayerScore'
import BoardGame from './src/objects/BoardGame'
const $root = document.querySelector("#root")
const $BoardGame= BoardGame(6)
const $HtmlPlayerScore = PlayerScore()

$root.insertAdjacentHTML("beforeend",$HtmlPlayerScore)
$root.insertAdjacentHTML("beforeend", $BoardGame)

