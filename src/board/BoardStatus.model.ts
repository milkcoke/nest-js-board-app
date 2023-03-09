export const BoardStatus = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
} as const;

export type BoardStatusType = (typeof BoardStatus)[keyof typeof BoardStatus];

const boardStatusSet = new Set(Object.values(BoardStatus));
export function isBoardStatus(status: BoardStatusType): boolean {
  return boardStatusSet.has(status);
}
