import clerkClient from "../../../../../lib/clerk";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const res = (await request.json()) as {
      organizationName?: string;
      createdBy?: string;
    };

    if (!res.organizationName || !res.createdBy) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const organization = await clerkClient.organizations.createOrganization({
      name: res.organizationName,
      createdBy: res.createdBy,
    });

    return Response.json(
      { message: "Organization created", organization },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(error);
    return Response.json(
      { error: error?.message || "Error creating organization" },
      { status: 500 }
    );
  }
}
