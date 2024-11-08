export const ko = {
    login: {
      title: '로그인',
      subtitle: '소셜 계정으로 로그인하거나 이메일을 입력하세요',
      email: {
        label: '이메일',
        placeholder: 'name@example.com'
      },
      password: {
        label: '암호',
        show: '암호 표시',
        hide: '암호 숨기기'
      },
      submit: '로그인',
      divider: 'Or continue with',
      socialLogin: {
        google: 'Google로 로그인',
        x: 'X로 로그인',
        naver: '네이버로 로그인',
        kakao: '카카오로 로그인'
      },
      links: {
        register: '회원가입',
        forgotPassword: '비밀번호를 잊으셨나요?'
      }
    },
    landing: {
      title: '좋아하는 크리에이터를 지원하려면 등록하십시오.'
    },
    signup: {
      title: '회원가입',
    }
  } as const
  
  export type Language = typeof ko
  
  export const languages = {
    ko
  } as const