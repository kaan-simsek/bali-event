
import Layout from "@/components/Layout";
import LocationSection from "@/components/LocationSection";

const Location = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-b from-bali-green/10 to-white">
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Location & Accommodation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the magic of Bali in the spiritual heart of Ubud, surrounded by
              lush jungles, sacred temples, and vibrant culture.
            </p>
          </div>
        </div>
      </div>
      
      <LocationSection />
      
      <section className="py-16 bg-bali-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6">Transportation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3">Getting to Ubud</h3>
                <p className="mb-4 text-muted-foreground">
                  Ubud is located approximately 1.5 hours from Ngurah Rai International Airport in Denpasar.
                  Here are the best ways to reach us:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Airport taxi (pre-paid booths available at the airport)</li>
                  <li>• Private transfer (can be arranged through us)</li>
                  <li>• Rideshare apps (Grab, Gojek)</li>
                  <li>• Shuttle services from major tourist areas</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3">Getting Around Ubud</h3>
                <p className="mb-4 text-muted-foreground">
                  Once in Ubud, there are several convenient ways to navigate between venues:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Walking (many venues are within walking distance)</li>
                  <li>• Scooter rental (most popular option)</li>
                  <li>• Bicycle rental</li>
                  <li>• Local drivers and taxis</li>
                  <li>• Shuttle service between main event venues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Location;
