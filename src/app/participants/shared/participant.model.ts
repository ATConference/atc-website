import { Program } from '../../programs/shared/program.model';

export class Participant {
  id: number;
  name: Object;
  type: string[];
  image: string;
  email: string;
  programs: Program[];
}
