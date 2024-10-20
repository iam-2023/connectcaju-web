import GoogleMapDisplayer from "@/components/google-map-displayer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Contacte-nos</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="space-y-6 mb-6">
          <ContactItem
            icon={<FaEnvelope className="text-blue-500" />}
            title="Email"
            content="connectcaju@iam.gov.mz"
          />
          <ContactItem
            icon={<FaPhone className="text-green-500" />}
            title="Telefone"
            content="+258 84 044 5375"
          />
          <ContactItem
            icon={<FaMapMarkerAlt className="text-red-500" />}
            title="Endereço"
            content="No. 33, Rua Gávea, Maputo, Moçambique"
          />
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Nossa Localização</h2>
          <GoogleMapDisplayer />
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <div className="flex items-center">
    <div className="text-2xl mr-4">{icon}</div>
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default ContactPage;
