export function RenewableEnergy() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.25em] uppercase font-semibold">
                  Renewable Energy
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-espresso font-light mb-6">
                Presence in the <span className="text-gold font-semibold italic">Renewable Energy Sector</span>
              </h2>
            </div>
            
            <p className="text-espresso-soft text-lg leading-relaxed">
              Anuradha Developers & Design Group has established a strong presence in the renewable energy sector by delivering civil construction and installation support for utility-scale solar and clean energy projects. Our expertise spans site development, infrastructure creation, installation support, and project execution, enabling the successful delivery of sustainable energy facilities.
            </p>
            
            <p className="text-espresso-soft text-lg leading-relaxed">
              With a focus on quality, safety, and timely completion, we collaborate with leading project developers and EPC contractors to contribute to India's growing renewable energy infrastructure. Our commitment is to build reliable, future-ready infrastructure that supports the nation's transition to clean and sustainable energy.
            </p>
          </div>

          {/* Image Side */}
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
            <img
              src="/renewable.jpeg"
              alt="Renewable Energy Facility"
              className="w-full h-full object-cover"
            />
            {/* Optional decoration */}
            <div className="absolute inset-0 border-4 border-gold/20 rounded-2xl m-4 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
