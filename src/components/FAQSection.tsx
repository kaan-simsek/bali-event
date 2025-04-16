
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Bali Spirit Gatherings?",
    answer:
      "Bali Spirit Gatherings is a transformative event that brings together the conscious community for experiences in dance, breathwork, sound healing, meditation, and various workshops. Our gatherings aim to foster connection, healing, and growth in the beautiful setting of Bali.",
  },
  {
    question: "When and where will the next gathering take place?",
    answer:
      "Our next gathering will take place from June 15-25, 2025, in Ubud, Bali. The specific venues for different events vary, but all are located within or near Ubud.",
  },
  {
    question: "How can I register for the events?",
    answer:
      "You can register through our website by visiting the registration page. We offer various ticket options, including full passes for the entire gathering, day passes, and individual event tickets.",
  },
  {
    question: "Is accommodation included in the ticket price?",
    answer:
      "No, accommodation is not included in the event tickets. However, we have partnered with several hotels and retreat centers in Ubud to offer special rates for participants. You can find more information on our Location & Accommodation page.",
  },
  {
    question: "Are there any food options available during the events?",
    answer:
      "Most venues offer food and beverage services. Additionally, we'll have food vendors at the main event locations featuring local, organic, and plant-based options.",
  },
  {
    question: "What should I bring to the gatherings?",
    answer:
      "We recommend bringing comfortable clothing suitable for movement, a yoga mat for workshops and meditation sessions, a reusable water bottle, sun protection, and any personal items you may need. For specific events, additional recommendations will be provided upon registration.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes, we offer full refunds up to 30 days before the event. Between 30 and 14 days before the event, 50% refunds are available. No refunds are available within 14 days of the event, but tickets are transferable.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 bg-bali-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
