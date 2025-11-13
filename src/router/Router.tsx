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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        path: "/home-page",
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
      // 나중에 "/about" 페이지를 추가하고 싶다면 여기에 추가하면 됨,, 상욱아
      // {
      //   path: "about", 이게 페이지 주소
      //   element: <AboutPage /> 이게 컴포넌트
      // }
    ],
  },
]);
