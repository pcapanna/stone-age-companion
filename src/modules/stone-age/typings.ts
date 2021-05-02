export type PlayerColor = string;

export type CardPositionKey = string;

export interface Player {
  color: PlayerColor;
  description: string;
  containerClassName: string;
}

export interface CardValue {
  card: PlayerColor;
  description: string;
  containerClassName: string;
}

export interface CardPosition {
  x: string;
  y: string;
}

