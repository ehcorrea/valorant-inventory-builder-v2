import { playerCard } from '@/constants/playerCard';
import { PlayerCard } from '@/types/playerCard';

import { create } from '../zustand';

type State = { playerCard: PlayerCard };

type Actions = {
  setplayerCard: (playerCard: PlayerCard) => void;
};

export const initialState: State = {
  playerCard,
};

export const playerCardStore = create<State & Actions>((set, get) => ({
  ...initialState,
  setplayerCard(playerCard) {
    set({
      playerCard,
    });
  },
}));
