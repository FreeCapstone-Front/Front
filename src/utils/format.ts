// src/utils/dateFormatters.ts

import type { trend, trendResponse } from "../types/analysis";

/**
 * Date 객체를 ISO 8601 형식 (YYYY-MM-DDTHH:mm:ss) 문자열로 변환합니다.
 * @param date - 변환할 Date 객체 (Date 또는 null)
 * @returns 포맷팅된 문자열 또는 빈 문자열
 */
export const formatToISOString = (date: Date | null): string => {
  if (!date) return "";

  // date가 Date 객체임을 확인했으므로 이제 safe하게 메서드를 사용합니다.

  // 날짜 부분 (YYYY-MM-DD)
  const datePart =
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0");

  // 시간 부분 (HH:mm:ss)
  const timePart =
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0") +
    ":" +
    String(date.getSeconds()).padStart(2, "0");

  return `${datePart}T${timePart}`;
};

/**
 * Date 객체를 날짜 형식 (YYYY-MM-DD) 문자열로 변환합니다.
 * @param date - 변환할 Date 객체 (Date 또는 null)
 * @returns 포맷팅된 문자열 또는 빈 문자열
 */
export const formatDate = (date: Date | null): string => {
  if (!date) return "";

  return (
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0")
  );
};

//꿈 그래프 같은날 중복 데이터 처리 함수 -> 같은날에 2번의 기록이 있으면 수면질이 좋은걸 선택
export function filterBestSleepQuality(
  trendList: trendResponse
): trendResponse {
  return Object.values(
    trendList.reduce((acc, cur) => {
      const current = acc[cur.date];
      if (!current || cur.sleepQuality > current.sleepQuality) {
        acc[cur.date] = cur;
      }
      return acc;
    }, {} as Record<string, trend>)
  );
}

//달 평균 내는 함수
export type MonthlyTrend = {
  month: string; // "YYYY-MM" 형식
  avgSleepQuality: number; // 해당 월 평균 수면 퀄리티
};

export const aggregateMonthly = (data: trendResponse): MonthlyTrend[] => {
  const monthlyMap = new Map<string, number[]>();

  data.forEach(({ date, sleepQuality }) => {
    const month = date.slice(0, 7); // YYYY-MM
    if (!monthlyMap.has(month)) monthlyMap.set(month, []);
    monthlyMap.get(month)!.push(sleepQuality);
  });

  return Array.from(monthlyMap.entries()).map(([month, values]) => ({
    month,
    avgSleepQuality: values.reduce((a, b) => a + b, 0) / values.length,
  }));
};

export const fillMissingMonths = (data: MonthlyTrend[]): MonthlyTrend[] => {
  const allMonths = [];
  for (let m = 1; m <= 12; m++) {
    const monthStr = `2025-${m.toString().padStart(2, "0")}`;
    allMonths.push(monthStr);
  }

  const dataMap = new Map(data.map((d) => [d.month, d]));

  return allMonths.map(
    (month) => dataMap.get(month) ?? { month, avgSleepQuality: 0 }
  );
};
