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
import ArticleListPage from "../pages/ArticleListPage";
import { SleepRoom } from "../pages/SleepRoom";
import { Article1Page } from "../pages/Article1Page";
import { LoginPage } from "../pages/LoginPage";

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
        path: "/auth-page",
        element: <AuthPage />,
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
        path: "login-page",
        element: <LoginPage />,
      },

      // 나중에 "/about" 페이지를 추가하고 싶다면 여기에 추가하면 됨,, 상욱아
      // {
      //   path: "about", 이게 페이지 주소
      //   element: <AboutPage /> 이게 컴포넌트
      // }
    ],
  },
]);
