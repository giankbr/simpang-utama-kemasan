export default function StatsSection() {
  const stats = [
    { number: '5000+', label: 'Produk Tersedia' },
    { number: '8', label: 'Divisi Bisnis' },
    { number: '98%', label: 'Kepuasan Pelanggan' },
    { number: 'Indo', label: 'Jangkauan Seluruh' },
  ]

  return (
    <section className="py-12 md:py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-white text-opacity-90 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
