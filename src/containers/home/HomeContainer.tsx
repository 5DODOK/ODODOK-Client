"use client";
import * as S from "@/containers/home/style";

type Props = {
  isAdmin?: boolean;
};

export default function HomeContainer({ isAdmin = false }: Props) {
  return (
    <S.Page>
      <S.Container>
        <S.Hero>
          <div>
            <S.Title>
              면접 질문을, 더 빠르게 모으고 더 똑똑하게 연습하세요
            </S.Title>
            <S.Subtitle>
              CSV 일괄 업로드와 직접 입력 등록을 모두 지원합니다. 질문 검색·연습·랭크까지 한 곳에서.
            </S.Subtitle>
            <S.Buttons>
              {isAdmin ? (
                <>
                  <S.PrimaryButton href="/questions/upload/csv">CSV로 질문 업로드</S.PrimaryButton>
                  <S.SecondaryButton href="/questions/new">직접 입력으로 등록</S.SecondaryButton>
                  <S.SecondaryButton href="/practice">바로 연습하기</S.SecondaryButton>
                </>
              ) : (
                <>
                  <S.PrimaryButton href="/practice">바로 연습하기</S.PrimaryButton>
                  <S.SecondaryButton href="/search">질문 검색하기</S.SecondaryButton>
                </>
              )}
            </S.Buttons>
          </div>
          <S.Art>
            <S.ArtCard>
              <img src="/globe.svg" alt="illustration" width={160} height={160} />
            </S.ArtCard>
          </S.Art>
        </S.Hero>

        <S.Features>
          <S.FeaturesGrid>
            <S.FeatureCard>
              <img src="/file.svg" alt="개인 연습" width={56} height={56} />
              <div>
                <S.FeatureTitle>개인 연습 모드</S.FeatureTitle>
                <S.FeatureDesc>
                  플래시카드·시뮬레이션 면접·타이머 지원. 메모와 즐겨찾기로 나만의 답변을 계속 다듬으세요.
                </S.FeatureDesc>
              </div>
            </S.FeatureCard>
            <S.FeatureCard>
              <img src="/window.svg" alt="추천과 북마크" width={56} height={56} />
              <div>
                <S.FeatureTitle>맞춤 추천 · 북마크</S.FeatureTitle>
                <S.FeatureDesc>
                  관심 태그·직무 기반 추천 큐레이션. 북마크로 리스트를 만들고, 복습 알림으로 학습 루틴을 유지합니다.
                </S.FeatureDesc>
              </div>
            </S.FeatureCard>
            <S.FeatureCard>
              <img src="/next.svg" alt="검색과 랭크" width={56} height={56} />
              <div>
                <S.FeatureTitle>검색 · 필터 · 랭크</S.FeatureTitle>
                <S.FeatureDesc>
                  태그·직무·회사·난이도 필터로 원하는 질문을 찾고, 기록·스트릭·랭크로 성장 데이터를 확인합니다.
                </S.FeatureDesc>
              </div>
            </S.FeatureCard>
          </S.FeaturesGrid>
        </S.Features>
      </S.Container>
    </S.Page>
  );
}
