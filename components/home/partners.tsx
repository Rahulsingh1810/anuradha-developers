import { Sun, Building2, MapPin } from 'lucide-react'

const collaborations = [
  {
    name: 'Somasila Solar Power Pvt Ltd',
    description: 'Civil and infrastructure works',
    icon: Sun,
  },
  {
    name: 'Merlin Group',
    description: 'Civil construction and development works',
    icon: Building2,
  },
  {
    name: 'Telangana Tourism',
    description: 'Government civil and infrastructure projects',
    icon: MapPin,
  },
  {
    name: 'TS Warehousing Corporation',
    description: 'Warehousing infrastructure development',
    icon: Building2,
  },
]

export function Collaborations() {
  return (
    <section className="py-20 bg-espresso">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-center text-gold/60 text-xs tracking-widest uppercase mb-4 font-semibold">
          Ongoing Collaborations
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-cream text-center mb-12 text-balance">
          Trusted <span className="text-gold font-semibold italic">Partners</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {collaborations.map((collab) => {
            const Icon = collab.icon
            return (
              <div
                key={collab.name}
                className="px-6 py-5 rounded-2xl bg-gold/10 border border-gold/20 hover:bg-gold/15 hover:border-gold/40 transition-colors cursor-default text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-gold" />
                </div>
                <p className="font-heading text-gold text-lg font-semibold leading-tight">
                  {collab.name}
                </p>
                <p className="text-gold-soft/50 text-[11px] tracking-widest uppercase mt-1">
                  {collab.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
