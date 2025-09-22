import useSWR from 'swr';

const baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets/';

interface GetSpreadSheetDataProps {
  spreadSheetId: string;
  sheetName: string;
  range: string;
}

interface SpreadSheetResponse {
  majorDimension: 'Rows';
  range: string;
  values: string[][];
}

const fetcher = async (url: string): Promise<SpreadSheetResponse> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch data from Google Sheets API: ${response.statusText}`,
    );
  }

  return response.json();
};

const useSpreadSheetData = ({
  spreadSheetId,
  sheetName,
  range,
}: GetSpreadSheetDataProps) => {
  const apiKey = import.meta.env.VITE_SPREAD_SHEET_API_KEY;
  if (!apiKey) {
    throw new Error('Google Sheets API key is not set.');
  }

  const url = apiKey
    ? `${baseUrl}${spreadSheetId}/values/${sheetName}!${range}?key=${apiKey}`
    : null;

  return useSWR<SpreadSheetResponse>(url, fetcher);
};
export const useSpreadSheetSkillData = () => {
  const result = useSpreadSheetData({
    spreadSheetId: import.meta.env.VITE_SPREAD_SHEET_ID!,
    sheetName: 'ヒーロースキル',
    range: 'A2:I200',
  });
  return (
    result.data?.values.map((row) => {
      const [
        className,
        name,
        maxLv,
        timing,
        skill,
        target,
        range,
        cost,
        effect,
      ] = row;
      return {
        class: className,
        maxLv: Number(maxLv),
        name,
        timing,
        skill,
        cost,
        range,
        effect,
        target,
      };
    }) || []
  );
};
export const useSpreadSheetUltimateData = () => {
  const result = useSpreadSheetData({
    spreadSheetId: import.meta.env.VITE_SPREAD_SHEET_ID!,
    sheetName: '必殺技',
    range: 'A2:I200',
  });
  return (
    result.data?.values.map((row) => {
      const [name, maxLv, timing, skill, target, range, cost, effect] = row;
      return {
        maxLv: Number(maxLv),
        name,
        timing,
        skill,
        cost,
        range,
        effect,
        target,
      };
    }) || []
  );
};
