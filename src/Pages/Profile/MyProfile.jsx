/*
  설명: 사용자 accountname의 프로필 페이지(내 페이지)
  작성자: 이해지
  최초 작성 날짜: 2023.10.29
  마지막 수정 날까: 2024.02.03
*/

import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import ProfileDetail from '../../Components/Profile/ProfileDetail';
import ProfileDetailPost from '../../Components/Profile/ProfileDetailPost';
import ProfileDetailProduct from '../../Components/Profile/ProfileDetailProduct';
import { Container } from '../../Components/Common/Container';

import userToken from '../../Recoil/userTokenAtom'; //파일경로 변경 완료

import Footer from '../../Components/Common/Footer';
import Header from '../../Components/Common/Header/Header';

import { getMyProfileData } from '../../API/Profile/ProfileAPI';
import { ProfileWrap, ProfileTop, Btns, MyProfileBtn } from './ProfileStyle';

// 프로필보기
function MyProfile() {
  const navigate = useNavigate();
  const token = useRecoilValue(userToken);

  const [profileImg, setProfileImg] = useState('');
  const [profileUsername, setProfileUsername] = useState('');
  const [profileAccountname, setProfileAccountname] = useState('');
  const [profileIntro, setProfileIntro] = useState('');
  const [profileFollowerCount, setProfileFollowerCount] = useState(0);
  const [profileFollowingCount, setProfileFollowingCount] = useState(0);

  async function UserInfo() {
    try {
      const res = await getMyProfileData();

      setProfileImg(res.user['image']);
      setProfileAccountname(res.user['accountname']);
      setProfileUsername(res.user['username']);
      setProfileIntro(res.user['intro']);
      setProfileFollowerCount(res.user['followerCount']);
      setProfileFollowingCount(res.user['followingCount']);
    } catch (error) {
      console.error('An error occurred while fetching user info:', error);
    }
  }

  useEffect(() => {
    UserInfo();
  }, [token]); // `token`이 변경될 때만 `fetchUserInfo`를 호출합니다.

  const userType = profileUsername.slice(0, 3) === '[o]' ? 'organization' : 'Individual';

  console.log(`userType : ${userType}`);
  const userInfoData = {
    profileImg,
    profileUsername,
    profileAccountname,
    profileIntro,
    profileFollowerCount,
    profileFollowingCount,
    userType,
  };

  return (
    <Container>
      <Header type='moreKebab' />
      <ProfileWrap>
        <section>
          <h1 className='a11y-hidden'>내 프로필</h1>
          <ProfileTop>
            <section>
              <ProfileDetail userInfoData={userInfoData} />
              <Btns>
                <MyProfileBtn
                  type='button'
                  onClick={() => {
                    navigate('/profile/edit');
                  }}
                >
                  프로필 수정
                </MyProfileBtn>
                {/* 일반 계정일 경우 상품등록 버튼 제거 */}
                {userType === 'organization' ? (
                  <MyProfileBtn
                    type='button'
                    onClick={() => {
                      navigate('/product');
                    }}
                  >
                    행사 등록
                  </MyProfileBtn>
                ) : null}
              </Btns>
            </section>
          </ProfileTop>
          {userType === 'organization' ? (
            <ProfileDetailProduct userInfoData={userInfoData} reFetchInfo={UserInfo} />
          ) : null}
          <ProfileDetailPost accountName={profileAccountname} />
          <Footer />
        </section>
      </ProfileWrap>
    </Container>
  );
}

export default MyProfile;
