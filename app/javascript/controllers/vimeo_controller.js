import { Controller } from "@hotwired/stimulus"
import Player from '@vimeo/player';

// Connects to data-controller="vimeo"
export default class extends Controller {
  static targets = [ "player" ]
  connect() {
    this.player = new Player(this.playerTarget)
  }

  play(event) {
    event.preventDefault()
    this.player.play()
  }

  setCurrentTime(event) {
    event.preventDefault()
    this.player.setCurrentTime(event.target.dataset.time)
  }
}
