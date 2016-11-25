import { Category } from '../../shared/category.model';

export const PARTICIPANT_CATEGORIES: Category[] = [
  { type: 'ALL', name: { en: 'All', ko: '모든 참가자' } },
  { type: 'ARTIST', name: { en: 'Artists', ko: '작가' } },
  { type: 'SPEAKER', name: { en: 'Speakers', ko: '연사' } },
  { type: 'STAFF', name: { en: 'Staffs', ko: '스태프' } }
];
