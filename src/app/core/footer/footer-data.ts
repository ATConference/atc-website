/* tslint:disable:max-line-length */

const describe = {
  title: {
    en: 'Art&Technology Conference',
    ko: 'Art&Technology Conference'
  },
  description: {
    en: 'ATC is Art&Technology Conference.',
    ko: 'ATC는 매년 서강대학교 아트&테크놀로지 학과 학생들의 주도적인 기획 및 참여로 개최되는 작품 전시회 및 교류 컨퍼런스입니다.'
  }
};

const contact = {
  title: {
    en: 'Contact ATC',
    ko: 'ATC 문의'
  },
  list: [
    {
      name: {
        en: 'Office',
        ko: '학과 사무실'
      },
      link: 'tel:+82-2-705-8031',
      display: '+82 (2) 705 8031'
    },
    {
      name: {
        en: 'Email',
        ko: '공식 이메일'
      },
      link: 'mailto:artechconference2016@gmail.com',
      display: 'artechconference2016@gmail.com'
    },
    {
      name: {
        en: 'SNS',
        ko: '공식 SNS'
      },
      link: 'https://fb.com/ATCsogang',
      display: '@ATCsogang'
    },
  ]
};

const logos = {
  project: {
    title: {
      en: 'Project',
      ko: '기획/운영'
    },
    link: 'http://creative.sogang.ac.kr/',
    image: '/assets/logo-artech.png',
    text: 'Art & Technology'
  },
  sponsor: {
    title: {
      en: 'Sponsors',
      ko: '후원'
    },
    items: [
      {
        image: '/assets/logo-samsung.png',
        text: 'Samsung'
      },
      {
        image: '/assets/logo-moe.png',
        text: 'Ministry of Education'
      }
    ]
  }
};

const madeby = {
  design: {
    en: 'Identity Design: ATC Design Team',
    ko: '아이덴티티 디자인: ATC 디자인팀'
  },
  web: {
    en: 'Web Site: ATC Technical Team',
    ko: '웹 사이트: ATC 기술팀'
  },
  copyright: {
    en: '© 2016 Art&Technology Conference',
    ko: '© 2016 Art&Technology Conference'
  }
};

export const FOOTER_DATA = {
  describe, contact, logos, madeby
};
