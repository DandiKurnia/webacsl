import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { LAB_REGIONS } from "@/lib/data";

export function LaboratoriesSection() {
  return (
    <section
      id="laboratories"
      aria-labelledby="labs-heading"
      className="relative isolate overflow-hidden bg-[#0E1116] text-white"
    >
      {/* Atmospheric backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 50% at 85% 8%, rgba(0,102,255,0.18), transparent 60%), radial-gradient(45% 45% at 8% 95%, rgba(245,194,74,0.08), transparent 65%)",
        }}
      />

      <div className="container mx-auto max-w-[1240px] px-4 py-24 sm:py-28 lg:py-32">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#5AA0FF]">
              <span aria-hidden className="size-1.5 rounded-full bg-[#5AA0FF]" />
              Laboratorium
            </span>
            <h2
              id="labs-heading"
              className="max-w-[18ch] text-balance text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.04em]"
            >
              Hadir di tiga kampus Gunadarma.
            </h2>
          </div>
          <Link
            href="/laboratories"
            className="group inline-flex w-fit items-center gap-2 text-[14px] font-medium text-white/85 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5AA0FF]"
          >
            Lihat semua lab
            <GoArrowUpRight
              aria-hidden
              className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            />
          </Link>
        </div>

        {/* Region tiles — image-led, not icon cards */}
        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LAB_REGIONS.map((region, i) => (
            <li key={region.name}>
              <Link
                href="/laboratories"
                className="group relative block overflow-hidden rounded-2xl ring-1 ring-white/10 transition-shadow duration-300 hover:ring-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5AA0FF]"
              >
                <img
                  src={region.image}
                  alt={`Laboratorium ACSL ${region.campus}, ${region.address}`}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                {/* Legibility gradient */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#0E1116] via-[#0E1116]/30 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-6">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#F5C24A]">
                    {region.campus}
                  </span>
                  <span className="text-[1.4rem] font-semibold leading-tight tracking-[-0.02em]">
                    {region.name}
                  </span>
                  <span className="text-[13px] leading-snug text-white/70">
                    {region.address}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
