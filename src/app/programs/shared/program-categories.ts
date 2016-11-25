import { Category } from '../../shared/category.model';

export const PROGRAM_CATEGORIES: Category[] = [
  { type: 'ALL', name: { en: 'All', ko: '모든 프로그램' } },
  { type: 'EXHIBITION', name: { en: 'Exhibitions', ko: '전시' } },
  { type: 'SHOWCASE', name: { en: 'Showcases', ko: '쇼케이스' } },
  { type: 'LECTURE', name: { en: 'Lectures', ko: '강연' } }
];
