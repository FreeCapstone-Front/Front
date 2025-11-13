// src/utils/dateFormatters.ts

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
