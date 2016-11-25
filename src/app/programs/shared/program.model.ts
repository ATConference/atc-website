import { Participant } from '../../participants/shared/participant.model';

export class Program {
  id: number;
  name: string;
  description: string;
  type: string[];
  thumbImage: string;
  images: string[];
  videoId: string;
  participants: Participant[];
}
