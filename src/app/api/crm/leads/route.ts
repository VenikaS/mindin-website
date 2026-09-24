const DEFAULT_CRM_LEADS_URL = "https://flownextai.in/api/crm/public/leads";
const CRM_ORG_TOKEN = "1334d44b90b44151bd93332051cfdc38";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const url = new URL(DEFAULT_CRM_LEADS_URL);

    url.searchParams.set("org_token", CRM_ORG_TOKEN);

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        source: data.source || "landing_page",
        notes: data.notes || "Booking form submitted",
      }),
    });

    const responseText = await response.text();

    if (!response.ok) {
      return Response.json(
        {
          status: "error",
          message: "Failed to create CRM lead",
          crmStatus: response.status,
          crmResponse: responseText,
        },
        { status: 502 }
      );
    }

    return Response.json({
      status: "success",
      crmResponse: responseText,
    });
  } catch (error) {
    return Response.json(
      {
        status: "error",
        message: error instanceof Error ? error.message : "Failed to create CRM lead",
      },
      { status: 500 }
    );
  }
}
