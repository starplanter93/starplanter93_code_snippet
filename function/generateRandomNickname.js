const ADJECTIVES = [
  '행복한',
  '예쁜',
  '멋진',
  '건강한',
  '강력한',
  '활발한',
  '용감한',
  '따뜻한',
  '예의바른',
  '빛나는',
  '활기찬',
  '곧은',
  '기쁜',
  '너그러운',
  '바람직한',
  '반가운',
  '밝은',
  '보람찬',
  '아름다운',
  '한결같은',
  '희망찬',
  '쾌활한',
  '착한',
  '명량한',
  '진실한',
  '갓생사는',
  '평화로운',
  '사려깊은',
  '친근한',
  '창의적인',
  '열정적인',
  '낙관적인',
  '유망한',
  '꿈꾸는',
  '뿌듯한',
  '개운한',
  '상냥한',
  '유쾌한',
  '상큼한',
  '즐거운',
  '명랑한',
  '눈부신',
  '자유로운',
  '부지런한',
  '여유로운',
  '힘찬',
  '낙천적인',
  '꼼꼼한',
  '훈훈한',
  '충만한',
  '믿음직한',
  '축복받은',
  '맑은',
  '훌륭한',
];

const NOUNS = [
  '고양이',
  '알파카',
  '여우',
  '고슴도치',
  '강아지',
  '선생님',
  '바나나',
  '사과',
  '포도',
  '파인애플',
  '브로콜리',
  '구름',
  '뭉게구름',
  '소나기',
  '해바라기',
  '사슴',
  '파스텔',
  '크레파스',
  '물감',
  '기린',
  '태양',
  '가수',
  '화가',
  '댄서',
  '예술가',
  '무지개',
  '비행기',
  '햄스터',
  '민들레',
  '수국',
  '장미',
  '로보트',
  '노트',
  '분필',
  '책상',
  '의자',
  '사탕',
  '딸기',
  '오렌지',
  '하늘',
  '천사',
  '진주',
  '토끼',
  '진달래',
];

export const NicknameGenerator = {
  generate: () => {
    // select random 1 from ADJECTIVES
    const randomAdjective =
      ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];

    // select random 1 from NOUNS
    const randomNoun = NOUNS[Math.floor(Math.random() * NOUNS.length)];

    // random string of length 4
    const randomString = Math.random().toString(36).substring(2, 6);

    return `${randomAdjective}${randomNoun}${randomString}`;
  },
  seeds: () => {
    return {
      ADJECTIVES,
      NOUNS,
    };
  },
};

console.log(NicknameGenerator.generate());
