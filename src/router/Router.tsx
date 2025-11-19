import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout";
import HomePage from "../pages/HomePage";
import { AuthPage } from "../pages/AuthPage";
import { AnalysisPage } from "../pages/AnalysisPage";
import { CalendarPage } from "../pages/CalendarPage";
import { CommunityPage } from "../pages/CommunityPage";
import { RecordPage } from "../pages/RecordPage";
import { SurveyResultPage } from "../pages/SurveyResultPage";
import { SurveyPage } from "../pages/SurveyPage";
import { IntroductionPage } from "../pages/IntroductionPage";
import { CommunityPageDetail } from "../pages/CommunityPageDetail";
import ArticleListPage from "../pages/ArticleListPage";

import { Article1Page } from "../pages/Article1Page";
import { AuthLayout } from "../layout/AuthLayout";
import { WritePost } from "../pages/WritePost";
import SignupPage from "../pages/SignupPage";
import DreamDetailPage from "../pages/DreamDetailPage";
import DreamBotPage from "../pages/DreamBotPage";
import SleepRoom from "../pages/SleepRoom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "analysis-page",
        element: <AnalysisPage />,
      },
      {
        path: "calendar-page",
        element: <CalendarPage />,
      },
      {
        path: "community-page",
        element: <CommunityPage />,
      },
      {
        path: "communitydetail-page/:id",
        element: <CommunityPageDetail />,
      },
      {
        path: "write-page",
        element: <WritePost />,
      },
      {
        path: "record-page",
        element: <RecordPage />,
      },
      {
        path: "result-page",
        element: <SurveyResultPage />,
      },
      {
        path: "survey-page",
        element: <SurveyPage />,
      },
      {
        path: "intro",
        element: <IntroductionPage />,
      },
      { path: "articleList-page", element: <ArticleListPage /> },
      { path: "article1-page", element: <Article1Page /> },
      {
        path: "sleepRoom-page",
        element: <SleepRoom />,
      },
      {
        path: "dream/:dreamId", // [translate:꿈 상세 페이지를 위한 중첩 라우팅 경로 추가]
        element: <DreamDetailPage />,
      },
      {
        path: "dreamBot", // [translate:꿈 상세 페이지를 위한 중첩 라우팅 경로 추가]
        element: <DreamBotPage />,
      },

      // 나중에 "/about" 페이지를 추가하고 싶다면 여기에 추가하면 됨,, 상욱아
      // {
      //   path: "about", 이게 페이지 주소
      //   element: <AboutPage /> 이게 컴포넌트
      // }
    ],
  },
  {
    element: <AuthLayout />, // Navbar 제외
    children: [
      {
        path: "/auth-page", // 상위 path 없이 절대경로로 설정하거나 path를 설정합니다.
        element: <AuthPage />,
      },
      {
        path: "/signup-page", // 상위 path 없이 절대경로로 설정합니다.
        element: <SignupPage />,
      },
    ],
  },
]);
