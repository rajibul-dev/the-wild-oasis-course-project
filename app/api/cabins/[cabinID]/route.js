import { getBookedDatesByCabinID, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinID } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinID),
      getBookedDatesByCabinID(cabinID),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch (error) {
    return Response.json({ message: "Cabin not found" });
  }
}
