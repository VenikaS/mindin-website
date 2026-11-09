export const therapyServices = [
  {
    id: "individual",
    title: "Individual Therapy",
    description: "One-on-one sessions for personal growth and healing.",
    duration: "1 hour",
    durationMinutes: 60,
    onlinePrice: 3200,
    inPersonPrice: 3400,
  },
  {
    id: "couples",
    title: "Couples Therapy",
    description: "Sessions to strengthen communication and relationship bonds.",
    duration: "1 hour 15 minutes",
    durationMinutes: 75,
    onlinePrice: 3600,
    inPersonPrice: 3800,
  },
  {
    id: "family",
    title: "Family Therapy",
    description: "Sessions to navigate unhelpful patterns and family dynamics.",
    duration: "1 hour 30 minutes",
    durationMinutes: 90,
    onlinePrice: 4000,
    inPersonPrice: 4200,
  },
] as const;

export type TherapyServiceId = (typeof therapyServices)[number]["id"];

export function getTherapyService(serviceId: string) {
  return therapyServices.find((service) => service.id === serviceId);
}

export function formatRupees(amount: number) {
  return `Rs. ${amount.toLocaleString("en-IN")}`;
}
