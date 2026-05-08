import { redis } from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { slug } = await req.json();

  if (!slug) return new NextResponse("Slug required", { status: 400 });

  await redis.incr(`pageviews:projects:${slug}`);

  return new NextResponse(null, { status: 202 });
}