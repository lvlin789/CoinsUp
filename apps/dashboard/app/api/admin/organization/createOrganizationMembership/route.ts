import clerkClient from "../../../../../lib/clerk";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json() as { organizationId: string; userId: string; role: string };
        console.log('Received data:', data);

        if (!data.organizationId || !data.userId || !data.role) {
            return Response.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const membership = await clerkClient.organizations.createOrganizationMembership({
            organizationId: data.organizationId,
            userId: data.userId,
            role: data.role,
        });

        return Response.json({ message: 'Membership created', membership }, { status: 201 });

    } catch (error: any) {
        console.error(error);
        return Response.json({ error: error?.message || 'Error creating membership' }, { status: 500 });
    }
}
