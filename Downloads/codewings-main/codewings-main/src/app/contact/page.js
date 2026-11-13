import Breadcrumbs from "../components/Breadcrumbs";
import ContactPage from "../components/ContactPage";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Theeditroom Labs | Start Your Project Today",
  description: "Have an idea or challenge? Contact Theeditroom Labs in Indore to discuss AI, digital products, branding, and growth. Start a conversation today.",
  path: "/contact",
});

export default function ContactRoute() {
  return (
    <>
      <Breadcrumbs currentPage="Contact" path="/contact" />
      <ContactPage />
    </>
  );
}
