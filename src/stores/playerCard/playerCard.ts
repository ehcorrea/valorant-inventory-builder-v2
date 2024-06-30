import { playerCard } from '@/constants';
import { PlayerCard } from '@/types/playerCard';

import { create } from '../zustand';

type State = { playerCard: PlayerCard };

type Actions = {
  setplayerCard: (playerCard: PlayerCard) => void;
};

export const initialStatePlayerCard: State = {
  playerCard,
};

export const playerCardStore = create<State & Actions>((set, get) => ({
  ...initialStatePlayerCard,
  setplayerCard(playerCard) {
    set({
      playerCard,
    });
  },
}));
