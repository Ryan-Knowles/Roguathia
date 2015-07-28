
import GameState from "./gamestate";

document.body.addEventListener('keydown', (e) => {
  if(e.keyCode !== ROT.VK_SPACE) return;
  
  GameState.isPaused = !GameState.isPaused;
  
  if(GameState.isPaused) {
    GameState.game.engine.lock();
  } else {
    GameState.game.engine.unlock();
  }
})