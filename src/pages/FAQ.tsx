
import Layout from "@/components/Layout";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-b from-bali-green/10 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our gatherings, events, and accommodations.
              If you can't find what you're looking for, please contact us directly.
            </p>
          </div>
        </div>
      </div>
      
      <FAQSection />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our team is here to help make your Bali Spirit Gathering experience as 
            transformative and hassle-free as possible.
          </p>
          <Link to="/contact">
            <Button className="bg-bali-green hover:bg-bali-green-dark transition-colors px-8 py-6 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
