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
export const fetchSpreadSheetData = async ({
  spreadSheetId,
  sheetName,
  range,
}: GetSpreadSheetDataProps): Promise<SpreadSheetResponse | null> => {
  const apiKey = import.meta.env.VITE_SPREAD_SHEET_API_KEY;
  if (!apiKey) {
    console.error('Google Sheets API key is not set.');
    return null;
  }

  try {
    const url = `${baseUrl}${spreadSheetId}/values/${sheetName}!${range}}?key=${apiKey}`;

    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        'Failed to fetch data from Google Sheets API:',
        response.statusText,
      );
      return null;
    }

    const data = await response.json();
    return data as SpreadSheetResponse;
  } catch (error) {
    console.error('Error fetching data from Google Sheets API:', error);
    return null;
  }
};
