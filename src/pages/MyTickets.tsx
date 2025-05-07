
import Layout from "@/components/Layout";

const MyTickets = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-b from-bali-green/10 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              My Tickets
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              View and manage all your purchased tickets for upcoming events.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-4 text-muted-foreground"
              >
                <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"></path>
                <rect x="2" y="6" width="20" height="6" rx="2"></rect>
              </svg>
              <h2 className="text-2xl font-medium mb-2">No tickets yet</h2>
              <p className="text-muted-foreground mb-6">
                You haven't purchased any tickets yet. When you do, they'll appear here.
              </p>
              <a
                href="/events"
                className="inline-flex items-center justify-center bg-bali-green hover:bg-bali-green-dark text-white px-4 py-2 rounded-md transition-colors"
              >
                Browse Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyTickets;
