import { instance } from '@/api/instance';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import data from '@/dummydata/communityReview.json';
import { IReview } from '@/interfaces/community';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';

import WriteIcon from '@/../public/icons/edit.svg';
import SearchIcon from '@/../public/icons/Group.svg';
import ReviewItem from '@/components/Community/ReviewItem';
import CommunityRouter from '@/components/Community/CommunityRouter';

const Review = () => {
  const router = useRouter();
  const [reviewData, setReviewData] = useState<Array<IReview>>([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const getData = async () => {
      await setReviewData(data.content);
    };
    getData();
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if ((event.nativeEvent.isComposing === false && event.key) === 'Enter') {
      console.log(keyword);
    }
  };

  const searchClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(keyword);
  };

  return (
    <ReviewContent>
      <TopArea>
        <p>
          생생한 <span className="textBold">여행후기</span>를 남겨주시고{' '}
          <span className="textBold">커피 한 잔</span>의 행운을 누려보세요.
        </p>
        <button>
          <WriteIcon />
          <span>후기쓰기</span>
        </button>
        <InputArea>
          <TextField
            placeholder="검색어를 입력해 주세요."
            className="search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <SearchIcon onClick={(e: React.KeyboardEvent<HTMLInputElement>) => searchClick(e)} />
        </InputArea>
      </TopArea>

      <MiddleArea>
        <CommunityRouter pathname={router.pathname} />
      </MiddleArea>

      <BottomArea>
        {reviewData.length > 0 ? (
          reviewData.map((item) => <ReviewItem key={item.boardId} data={item} />)
        ) : (
          <h3>후기가 존재하지 않습니다.</h3>
        )}
      </BottomArea>
    </ReviewContent>
  );
};

export default Review;

const ReviewContent = styled.div``;

const TopArea = styled.div`
  background-color: #e7f7fe;
  padding: 1rem 1.5rem;
  margin-bottom: 20px;
  display: grid;
  grid-template-rows: 5rem 3rem;
  grid-template-areas:
    'text button'
    'input input';
  .textBold {
    font-weight: bold;
  }
  p {
    font-size: 1.2rem;
    margin: auto;
    grid-area: text;
  }
  button {
    background-color: #0cb1f3;
    border: 1px solid #0cb1f3;
    border-radius: 8px;
    color: #fff;
    width: 70%;
    height: 50%;
    margin: auto;
    grid-area: button;
    span {
      margin-left: 5px;
      font-size: 1rem;
      z-index: 1;
    }
  }
`;

const InputArea = styled.div`
  grid-area: input;
  text-align: center;
  position: relative;
  .search {
    width: 60%;
    border-radius: 8px;
    input {
      padding: 5px;
      background-color: #fff;
    }
  }
  svg {
    position: absolute;
    right: 20%;
    width: 30px;
    height: 30px;
    margin-top: 5px;
  }
`;

const MiddleArea = styled.div``;

const BottomArea = styled.div`
  display: flex;
  margin: 20px 0;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: flex-start;
`;
