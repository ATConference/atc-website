import { Program } from '../../programs/shared/program.model';

export class Participant {
  id: number;
  name: Object;
  description: Object;
  type: string[];
  thumbImage: string;
  image: string;
  email: string;
  programs: Program[];
}
