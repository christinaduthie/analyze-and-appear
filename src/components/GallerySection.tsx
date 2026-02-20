const galleryItems = [
  { title: "Conference Talk", caption: "Presenting on ML scalability at DataConf 2024" },
  { title: "Team Workshop", caption: "Leading a data literacy workshop for stakeholders" },
  { title: "Hackathon Win", caption: "First place at the Global Data Hackathon 2023" },
  { title: "Research Paper", caption: "Published in the Journal of Applied Data Science" },
  { title: "Dashboard Demo", caption: "Live demo of the real-time analytics platform" },
  { title: "Community Event", caption: "Organizing the local Data Science Meetup" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-sm tracking-widest uppercase mb-3 font-body">Gallery</p>
        <h2 className="section-heading">Moments & Milestones</h2>
        <p className="section-subtitle">
          Highlights from conferences, collaborations, and community involvement.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all"
            >
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <span className="text-muted-foreground/40 font-display text-lg">{item.title}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
