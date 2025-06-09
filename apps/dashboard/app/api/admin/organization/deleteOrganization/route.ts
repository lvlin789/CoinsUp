import clerkClient from "../../../../../lib/clerk";
import type { NextRequest } from "next/server";

export async function DELETE(params: NextRequest) {
  const res = (await params.json()) as { organizationId?: string };
  if (!res.organizationId) {
    return Response.json({ error: "Missing organizationId" }, { status: 400 });
  }
  try {
    // 删除组织
    await clerkClient.organizations.deleteOrganization(res.organizationId);
    return Response.json(
      { message: "Organization deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting organization:", error);
    return Response.json(
      { error: error?.message || "Error deleting organization" },
      { status: 500 }
    );
  }
}
