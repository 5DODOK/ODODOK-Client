"use client";
import { useState } from 'react';
import * as S from './style';

interface User {
  id: number;
  name: string;
  avatar: string;
  points: number;
  rank: number;
}

export default function RankContainer() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "오주현",
      avatar: "https://i.imgur.com/YjvKgkW.png",
      points: 2850,
      rank: 1
    },
    {
      id: 2,
      name: "오주현",
      avatar: "https://i.imgur.com/YjvKgkW.png",
      points: 2640,
      rank: 2
    },
    {
      id: 3,
      name: "오주현",
      avatar: "https://i.imgur.com/YjvKgkW.png",
      points: 2420,
      rank: 3
    },
    {
      id: 4,
      name: "오주현",
      avatar: "https://i.imgur.com/YjvKgkW.png",
      points: 2180,
      rank: 4
    },
    {
      id: 5,
      name: "오주현",
      avatar: "https://i.imgur.com/YjvKgkW.png",
      points: 1950,
      rank: 5
    },
    {
      id: 6,
      name: "오주현",
      avatar: "https://i.imgur.com/YjvKgkW.png",
      points: 1820,
      rank: 6
    },
    {
      id: 7,
      name: "오주현",
      avatar: "https://i.imgur.com/YjvKgkW.png",
      points: 1750,
      rank: 7
    },
    {
      id: 8,
      name: "문답변",
      avatar: "https://i.imgur.com/YjvKgkW.png",
      points: 1680,
      rank: 8
    },
    {
      id: 9,
      name: "제질문",
      avatar: "https://i.imgur.com/YjvKgkW.png",
      points: 1620,
      rank: 9
    },
    {
      id: 10,
      name: "답해결",
      avatar: "https://i.imgur.com/YjvKgkW.png",
      points: 1580,
      rank: 10
    }
  ]);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  return (
    <S.Container>
      <S.PageTitle>포인트 랭킹</S.PageTitle>

      <S.RankingSection>
        <S.TopThree>
          {users.slice(0, 3).map((user, index) => (
            <S.TopUserCard key={user.id} rank={index + 1}>
              <S.RankIcon>{getRankIcon(user.rank)}</S.RankIcon>
              <S.TopUserAvatar>
                <S.AvatarImage src={user.avatar} alt={user.name} />
              </S.TopUserAvatar>
              <S.TopUserName>{user.name}</S.TopUserName>
              <S.TopUserPoints>{user.points.toLocaleString()}P</S.TopUserPoints>
            </S.TopUserCard>
          ))}
        </S.TopThree>

        <S.RankingList>
          <S.RankingHeader>
            <S.HeaderCell>순위</S.HeaderCell>
            <S.HeaderCell>사용자</S.HeaderCell>
            <S.HeaderCell>포인트</S.HeaderCell>
          </S.RankingHeader>

          {users.map((user) => (
            <S.RankingRow key={user.id}>
              <S.RankCell>
                <S.RankNumber>{getRankIcon(user.rank)}</S.RankNumber>
              </S.RankCell>
              <S.UserCell>
                <S.UserAvatar>
                  <S.AvatarImage src={user.avatar} alt={user.name} />
                </S.UserAvatar>
                <S.UserName>{user.name}</S.UserName>
              </S.UserCell>
              <S.PointsCell>{user.points.toLocaleString()}P</S.PointsCell>
            </S.RankingRow>
          ))}
        </S.RankingList>
      </S.RankingSection>
    </S.Container>
  );
}