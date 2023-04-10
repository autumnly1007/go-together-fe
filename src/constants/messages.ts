export const MESSAGES = {
  LOGIN: {
    CHECK: '존재하지 않는 이메일이이거나 비밀번호가 틀렸습니다',
    ERROR_LOGIN: '로그인 중\n에러가 발생하였습니다.',
    COMPLETE_LOGIN: '로그인이 완료되었습니다.',
    ADMIN_LOGIN: '관리자 계정으로\n로그인 되었습니다.',
    WITHDRAWAL: '탈퇴한 회원입니다.',
  },
  WITHDRAWAL: {
    CONFIRM: '회원탈퇴를 진행하시겠습니까?',
    COMPLETE: '회원탈퇴가 완료되었습니다.',
  },
  LOGOUT: {
    ERROR_LOGOUT: '로그아웃 중\n에러가 발생하였습니다.',
    COMPLETE_LOGOUT: '로그아웃이 완료되었습니다.',
  },
  SIGNUP: {
    CHECK_EMAIL_DUPLICATE: '이미 존재하는 이메일입니다.',
    ERROR_SIGNUP: '회원 가입 중\n에러가 발생하였습니다.',
    COMPLETE_SIGNUP: '회원 가입이\n완료되었습니다.',
    SUBMIT_CHECK:
      '회원가입을 하시면 비밀번호와 전화번호만 변경가능 합니다.\n회원가입 하시겠습니까?',
    INPUT_ERROR: '회원가입란을 다시 한번 확인해주세요.',
    USED_EMAIL: '사용불가능한 이메일입니다.',
    UNUSED_EMAIL: '사용가능한 이메일입니다.',
    WITHDRAWAL: '이미 탈퇴한 회원입니다.',
    MISS: '비밀번호나 이메일이 바르지 않습니다.',
    CONFIRM_PASSWORD: '비밀번호가 일치하지 않습니다.',
  },
  PRODUCT: {
    CHECK_KEYWORD: '검색어를 입력해 주세요.',
    ERROR_GET_PRODUCT: '상품 조회 중\n에러가 발생하였습니다.',
    ERROR_GET_DETAIL: '상품상세 조회 중\n에러가 발생하였습니다.',
  },
  PRODUCT_DETAIL: {
    ADD_CART: '장바구니에 추가되었습니다. \n장바구니로 이동하시겠습니까?',
    OPTION_ERROR: '필수옵션이 선택되어 있지 않습니다.',
  },
  INPUT: {
    CHECK: {
      PASSWORD: '비밀번호는 필수 입력입니다.',
      EMAIL: '이메일은 필수 입력입니다.',
      PHONE: '전화번호는 필수 입력입니다.',
      NAME: '이름은 필수 입력입니다.',
      CONFIRM_PASSWORD: '비밀번호 확인은 필수입니다.',
      BIRTH: '생년월일은 필수 입력입니다.',
      SEX: '성별은 필수 입력입니다.',
      AGREE: '약관동의는 필수입니다.',
      PASSPORT: '여권 이름은 필수 입력입니다.',
    },
    ERROR: {
      PASSWORD_MIN: '8자리 이상 비밀번호를 사용하세요.',
      PASSWORD_MAX: '16자리 이하 비밀번호를 사용하세요.',
      PASSWORD_PATTERN: '적합한 비밀번호가 아닙니다.',
      PHONE_PATTERN: '전화번호 형식에 맞지 않습니다.',
      PHONE_MAX: '전화번호는 11자리 이하입니다.',
      NAME_PATTERN: '이름 형식에 맞지 않습니다.',
      NAME_MAX: '이름은 3자리 이상 4자리 이하입니다.',
      EMAIL_PATTERN: '이메일 형식에 맞지 않습니다.',
      BIRTH_PATTERN: '생년월일 형식에 맞지 않습니다.',
    },
  },
  ORDER: {
    EXPIRE: '결제시간이 초과되었습니다.\n다시 시도해주세요.',
  },
  INVALID_AUTH: '회원 전용 메뉴입니다.\n로그인 후 이용해 주세요.',
  VALID_AUTH: '로그인된 계정입니다.\n로그아웃 후 이용해주세요.',
  CHANGE_INFO: '정보수정이 완료되었습니다.',
  MOVE_TO_SIGNUP: '계정이 없으신가요? 그렇다면 회원가입 페이지로 이동해 주세요.',
  ERROR: '에러가 발생하였습니다.',
  COMMUNITY: {
    COMPLETE_ADD: '추가가 완료되었습니다.',
    COMPLETE_EDIT: '수정이 완료되었습니다.',
    MOVE_TO_LOGIN: '회원 전용 메뉴입니다.\n로그인 후 이용해 주세요.',
    ERROR_DELETE: '에러가 발생하였습니다.',
    CONFIRM_DELETE: '삭제하시겠습니까?',
    COMPLETE_DELETE: '삭제가 완료되었습니다.',
  },
  MYPAGE: {
    DELETE_REVERVATION_CONFIRM: '예약을 취소 하시겠습니까?',
    DELETE_REVERVATION_COMPLETE: '취소가 완료되었습니다.',
    DELETE_REVERVATION_ERROR: '에러가 발생하였습니다.',
  },
};
