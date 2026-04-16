import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

const SHEET_ID = '1xznyIvAnSsPQqlqcj5kExv1vunAOvQ5DHdjPcc-G8Qk';
const SHEET_NAME = 'ЛИДЫ КРЕМЕНЧУК';

// Helper to get auth and append to sheet
async function appendToSheet(values: any[]) {
  try {
    // Using service account credentials
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
      } as any,
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const request = {
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [values],
      },
    };

    const response = await sheets.spreadsheets.values.append(request as any);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Google Sheets API Error:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, businessType, email } = body;

    // Validate required fields
    if (!name || !phone || !businessType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare data for sheet
    const timestamp = new Date().toLocaleString('uk-UA');
    const values = [timestamp, name, phone, businessType, email || ''];

    // Append to sheet
    await appendToSheet(values);

    return NextResponse.json(
      { success: true, message: 'Lead saved successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    );
  }
}
