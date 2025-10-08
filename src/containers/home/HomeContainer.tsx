"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import * as S from "@/containers/home/style";

type Props = {
  isAdmin?: boolean;
};

export default function HomeContainer({ isAdmin = false }: Props) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // Showcase cards 3D rotation refs
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress: card1Progress } = useScroll({
    target: card1Ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: card2Progress } = useScroll({
    target: card2Ref,
    offset: ["start end", "end start"]
  });

  // 3D rotation values
  const card1RotateY = useTransform(card1Progress, [0, 0.5, 1], [15, 0, -15]);
  const card1RotateX = useTransform(card1Progress, [0, 0.5, 1], [-10, 0, 10]);

  const card2RotateY = useTransform(card2Progress, [0, 0.5, 1], [-15, 0, 15]);
  const card2RotateX = useTransform(card2Progress, [0, 0.5, 1], [-10, 0, 10]);

  return (
    <S.Page>
      {/* Floating background elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(118, 75, 162, 0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <S.Container>
        {/* Hero Section */}
        <S.Hero>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <S.Title>
              면접 질문을 더 스마트하게 준비하세요
            </S.Title>

            <S.Subtitle>
              오도독(ODODOK)은 면접 질문 등록·검색·연습·랭킹을 한 곳에서 제공합니다.
              {isAdmin && " 관리자로서 CSV 일괄 업로드와 직접 등록을 모두 지원합니다."}
            </S.Subtitle>

            <S.Buttons>
              {isAdmin ? (
                <>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <S.PrimaryButton href="/register">질문 등록하기</S.PrimaryButton>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <S.SecondaryButton href="/search">질문 검색</S.SecondaryButton>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <S.SecondaryButton href="/solve">문제 풀기</S.SecondaryButton>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <S.PrimaryButton href="/solve">문제 풀기</S.PrimaryButton>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <S.SecondaryButton href="/search">질문 검색</S.SecondaryButton>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <S.SecondaryButton href="/rank">랭킹 보기</S.SecondaryButton>
                  </motion.div>
                </>
              )}
            </S.Buttons>
          </motion.div>

          <S.Art>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ y }}
            >
              <S.ArtCard>
                <Image src="/globe.svg" alt="illustration" width={160} height={160} priority />
              </S.ArtCard>
            </motion.div>
          </S.Art>
        </S.Hero>

        {/* Features Section */}
        <S.Features>
          <S.FeaturesGrid>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <S.FeatureCard>
                  <div style={{ fontSize: '40px' }}>🎯</div>
                  <div>
                    <S.FeatureTitle>AI 피드백 문제 풀기</S.FeatureTitle>
                    <S.FeatureDesc>
                      카테고리나 회사별로 10문제를 풀고, 각 답변마다 AI 피드백을 받으세요.
                    </S.FeatureDesc>
                  </div>
                </S.FeatureCard>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <S.FeatureCard>
                  <div style={{ fontSize: '40px' }}>🔍</div>
                  <div>
                    <S.FeatureTitle>강력한 검색 · 필터</S.FeatureTitle>
                    <S.FeatureDesc>
                      카테고리·회사·면접유형·난이도·연도별로 원하는 질문을 빠르게 찾으세요.
                    </S.FeatureDesc>
                  </div>
                </S.FeatureCard>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <S.FeatureCard>
                  <div style={{ fontSize: '40px' }}>📊</div>
                  <div>
                    <S.FeatureTitle>랭킹 · 성장 기록</S.FeatureTitle>
                    <S.FeatureDesc>
                      점수와 포인트로 다른 사용자들과 경쟁하며 실시간 랭킹을 확인하세요.
                    </S.FeatureDesc>
                  </div>
                </S.FeatureCard>
              </motion.div>
            </motion.div>
          </S.FeaturesGrid>
        </S.Features>

        {/* Showcase Section */}
        <S.ShowcaseSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <S.SectionTitle>실시간 AI 피드백으로 빠르게 성장하세요</S.SectionTitle>
            <S.SectionSubtitle>
              체계적인 학습과 즉각적인 피드백으로 면접 실력을 향상시킬 수 있습니다
            </S.SectionSubtitle>
          </motion.div>

          <S.ShowcaseGrid>
            <motion.div
              ref={card1Ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                perspective: "1000px",
              }}
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  rotateY: card1RotateY,
                  rotateX: card1RotateX,
                  transformStyle: "preserve-3d",
                }}
              >
                <S.ShowcaseCard style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                  <div>
                    <div style={{ fontSize: '48px', marginBottom: '20px' }}>💡</div>
                    <S.ShowcaseTitle>실시간 AI 피드백</S.ShowcaseTitle>
                    <S.ShowcaseDesc>
                      각 답변마다 AI가 즉시 피드백을 제공합니다. 부족한 부분을 바로 파악하고 개선하세요.
                    </S.ShowcaseDesc>
                  </div>
                </S.ShowcaseCard>
              </motion.div>
            </motion.div>

            <motion.div
              ref={card2Ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                perspective: "1000px",
              }}
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  rotateY: card2RotateY,
                  rotateX: card2RotateX,
                  transformStyle: "preserve-3d",
                }}
              >
                <S.ShowcaseCard style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                  <div>
                    <div style={{ fontSize: '48px', marginBottom: '20px' }}>📚</div>
                    <S.ShowcaseTitle>체계적인 문제 관리</S.ShowcaseTitle>
                    <S.ShowcaseDesc>
                      카테고리별, 회사별로 분류된 면접 질문. 원하는 주제를 선택해 효율적으로 준비하세요.
                    </S.ShowcaseDesc>
                  </div>
                </S.ShowcaseCard>
              </motion.div>
            </motion.div>
          </S.ShowcaseGrid>
        </S.ShowcaseSection>

        {/* Stats Section */}
        <S.StatsSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <S.SectionTitle>함께 성장하는 커뮤니티</S.SectionTitle>
          </motion.div>

          <S.StatsGrid>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <S.StatCard>
                <S.StatNumber>1,000+</S.StatNumber>
                <S.StatLabel>등록된 면접 질문</S.StatLabel>
              </S.StatCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <S.StatCard>
                <S.StatNumber>30+</S.StatNumber>
                <S.StatLabel>제휴 기업</S.StatLabel>
              </S.StatCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <S.StatCard>
                <S.StatNumber>95%</S.StatNumber>
                <S.StatLabel>사용자 만족도</S.StatLabel>
              </S.StatCard>
            </motion.div>
          </S.StatsGrid>
        </S.StatsSection>

        {/* CTA Section */}
        <S.CTASection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <S.CTATitle>지금 바로 시작하세요</S.CTATitle>
            <S.CTADesc>
              오도독과 함께라면 면접 준비가 더 이상 두렵지 않습니다
            </S.CTADesc>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <S.CTAButton href="/solve">
                무료로 시작하기 →
              </S.CTAButton>
            </motion.div>
          </motion.div>
        </S.CTASection>
      </S.Container>
    </S.Page>
  );
}
