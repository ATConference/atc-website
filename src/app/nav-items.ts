import { NavItem } from './core/shared/nav-item.model';

export const NAV_ITEMS: NavItem[] = [
  {
    name: {
      en: 'About',
      ko: '소개'
    },
    link: '/about'
  },
  {
    name: {
      en: 'Programs',
      ko: '프로그램'
    },
    link: '/programs'
  },
  {
    name: {
      en: 'Participants',
      ko: '참가자'
    },
    link: '/participants'
  },
  {
    name: {
      en: 'Schedule',
      ko: '일정'
    },
    link: '/schedule'
  },
  {
    name: {
      en: 'Locations',
      ko: '위치'
    },
    link: '/locations'
  },
  {
    name: {
      en: 'Archive',
      ko: '아카이브'
    },
    link: '/archives'
  }
];
