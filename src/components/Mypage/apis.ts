import { instance } from '@/api/instance';
import { MESSAGES } from '@/constants/messages';
import { IPatchMyInfoProps } from '@/interfaces/myinfo';
import { alterModal } from '../SignIn/function';

export const patchMyInfo = async (
  data: any,
  setPatchInfo: React.Dispatch<React.SetStateAction<IPatchMyInfoProps>>,
  patchInfo: IPatchMyInfoProps,
  setChangeInfo: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: any,
) => {
  await instance({
    method: 'PATCH',
    url: 'https://www.go-together.store:443/user/myInfo',
    data: data,
  })
    .then(async (res) => {
      console.log(res);
      if (res.status === 200) {
        await setPatchInfo({ ...patchInfo, phone: data.userPhoneNumber });
        await setChangeInfo(false);
        await alterModal(MESSAGES.CHANGE_INFO, dispatch);
      } else if (res.status === 400) {
        await alterModal('비밀번호가 일치하지 않습니다. 다시 확인해주세요.', dispatch);
      } else {
        await alterModal('잘못된 요청입니다. 다시 시도해주세요.', dispatch);
      }
    })
    .catch(async (error) => {
      console.log(error);
      await alterModal(error, dispatch);
    });
};

export const searchMyPassword = async (data: any, dispatch: any) => {
  await instance({
    method: 'POST',
    url: `https://www.go-together.store:443/auth/find/password?email=${data.email}`,
  })
    .then(async (res) => {
      console.log(res);
      if (res.status === 200) {
        await alterModal('이메일로 비밀번호 변경 url이 발송되었습니다.', dispatch);
      } else {
        await alterModal('존재하지 않는 이메일입니다. 다시 한번 이메일을 확인해주세요.', dispatch);
      }
    })
    .catch((error) => {
      console.log(error);
      alterModal(
        '서버에 오류가 생겨 비밀번호 url이 발송되지 못했습니다. 다시 시도해주세요.',
        dispatch,
      );
    });
};

export const deleteMyAccount = async (
  data: any,
  dispatch: any,
  router: any,
  removeCookies: any,
) => {
  await instance({
    method: 'DELETE',
    url: 'https://www.go-together.store:443/user/withdraw',
    data: data,
  })
    .then(async (res) => {
      if (res.status === 200) {
        await removeCookies('accessToken');
        await removeCookies('refreshToken');
        await removeCookies('isAdmin');
        await alterModal(MESSAGES.WITHDRAWAL.COMPLETE, dispatch);
        await router.push('/');
      } else {
        await alterModal('비밀번호가 일치하지 않거나 올바른 사용자가 아닙니다.', dispatch);
      }
    })
    .catch((error) => {
      console.log(error);
      alterModal('에러로 인해 탈퇴가 정상적으로 진행되지 않았습니다. 다시 시도해주세요.', dispatch);
    });
};

export const getMyInfo = async (
  setMyinfo: React.Dispatch<React.SetStateAction<IPatchMyInfoProps>>,
) => {
  instance({
    method: 'GET',
    url: 'https://www.go-together.store:443/user/myInfo',
  })
    .then((res) => {
      console.log(res);
      setMyinfo(res.data);
    })
    .catch((error) => {
      console.log(error);
      // throw new Error(error);
    });
};

export const mypageLogout = async (
  dispatch: any,
  router: any,
  cookies: any,
  removeCookies: any,
) => {
  await instance({
    method: 'POST',
    url: 'https://www.go-together.store:443/auth/logout',
    data: {
      refreshToken: cookies.refreshToken,
    },
  })
    .then(async (res) => {
      console.log(res);
      if (res.status === 200) {
        await removeCookies('accessToken');
        await removeCookies('refreshToken');
        await removeCookies('isAdmin');
        await alterModal(MESSAGES.LOGOUT.COMPLETE_LOGOUT, dispatch);
        router.push('/');
      } else if (res.status === 401) {
        await alterModal('이 계정은 이미 로그아웃된 계정입니다.', dispatch);
      } else {
        await alterModal(MESSAGES.LOGOUT.ERROR_LOGOUT, dispatch);
      }
    })
    .catch((error) => {
      console.log(error);
      alterModal(MESSAGES.LOGOUT.ERROR_LOGOUT, dispatch);
    });
};
