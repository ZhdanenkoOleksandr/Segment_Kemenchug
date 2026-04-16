import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { bookedPlaces } = body;

    // In production, save to database
    // For now, we'll just return success
    // The actual update will be in config.ts

    return NextResponse.json(
      { success: true, message: 'Config updated', bookedPlaces },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to update config' },
      { status: 500 }
    );
  }
}
