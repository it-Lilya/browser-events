import { GameBoard } from '../../components/GameBoard/GameBoard';

test('Тест игры', () => {
  const newBoard = new GameBoard(4);
  expect(newBoard.boardSize).toEqual(16);
});
