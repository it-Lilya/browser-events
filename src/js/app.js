import { GameBoard } from '../components/GameBoard/GameBoard';
import { HammerBlow } from '../components/HammerBlow/HammerBlow';

const newBoard = new GameBoard(4);
const newHit = new HammerBlow();

newBoard.newBoard();
newHit.onPass();
