import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        data: [
            {
                name: "Dashboard",
                href: "/dashboard",
                icon: ""
            },
            {
                name: "Admin Management",
                href: null,
                icon: "",
                children: [{
                    name: "Role Management",
                    href: "/role",
                    icon: ""
                }, {
                    name: "Admin Management",
                    href: "/admin-management",
                    icon: ""
                }]
            }
        ]
    });
}