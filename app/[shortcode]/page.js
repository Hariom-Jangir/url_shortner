import { connectDB } from "@/lib/mongodb";
import Url from "@/models/url";
import { redirect } from "next/navigation";

export default async function Page({ params }) {

  const { shortcode } = await params;

  await connectDB();

  const data = await Url.findOne({
    shortCode: shortcode
  });

  if (data) {
    redirect(data.originalUrl);
  }

  return <div>Link not found</div>;
}