import BookingForm from "./BookingForm";

export default async function BookAppointmentPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const { service } = await searchParams;

  return <BookingForm initialService={typeof service === "string" ? service : undefined} />;
}
