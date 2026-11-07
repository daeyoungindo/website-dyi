const sampleMessages = [
  {
    name: "Sample Buyer",
    company: "Global Sport Co.",
    email: "buyer@example.com",
    topic: "Permintaan sampel Engineering Mesh",
    status: "Baru",
  },
  {
    name: "Procurement Lead",
    company: "Footwear Partner",
    email: "proc@example.com",
    topic: "Kunjungan pabrik Jawa Tengah",
    status: "Ditinjau",
  },
];

export default function AdminPesanPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
          Pesan masuk
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold">
          Inbox kontak
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-white/65">
          Placeholder inbox untuk form kontak website. Integrasi penyimpanan
          pesan dapat disambungkan ke API atau database kemudian.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-white/55">
            <tr>
              <th className="px-4 py-3 font-medium">Pengirim</th>
              <th className="px-4 py-3 font-medium">Topik</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleMessages.map((message) => (
              <tr
                key={message.email + message.topic}
                className="border-t border-white/10"
              >
                <td className="px-4 py-4">
                  <p className="font-medium">{message.name}</p>
                  <p className="text-white/50">
                    {message.company} · {message.email}
                  </p>
                </td>
                <td className="px-4 py-4 text-white/80">{message.topic}</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-blue/20 px-3 py-1 text-xs text-blue">
                    {message.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
