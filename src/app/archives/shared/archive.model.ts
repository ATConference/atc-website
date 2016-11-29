import { Participant } from '../../participants/shared/participant.model';

export class Archive {
  id: number;
  name: Object;
  description: Object;
  year: number;
  director: Participant;
  thumbImage: string;
  images: string[];
}
