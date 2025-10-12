"use client";
import HomeContainer from "@/containers/home/HomeContainer";
import { useUserStore } from "@/store/userStore";

export default function Home() {
  const { userInfo } = useUserStore();
  const isAdmin = userInfo?.email?.endsWith('@bssm.hs.kr') || false;

  return <HomeContainer isAdmin={isAdmin} />;
}
