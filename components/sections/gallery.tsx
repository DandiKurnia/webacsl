import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { GALLERY_ITEMS } from "@/lib/data";

export function GallerySection() {
  const items = GALLERY_ITEMS.slice(0, 7);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative bg-white"
    >
      <div className="container mx-auto max-w-[1240px] px-4 py-24 sm:py-28 lg:py-32">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#0066FF]">
              <span aria-hidden className="size-1.5 rounded-full bg-[#0066FF]" />
              Galeri
            </span>
            <h2
              id="gallery-heading"
              className="max-w-[16ch] text-balance text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.04em] text-[#0E1116]"
            >
              Dokumentasi kegiatan kami.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex w-fit items-center gap-2 text-[14px] font-medium text-[#0066FF] transition-colors duration-200 hover:text-[#0052cc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF]"
          >
            Lihat galeri lengkap
            <GoArrowUpRight
              aria-hidden
              className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            />
          </Link>
        </div>

        {/* Editorial mosaic — varied tile sizes, not a uniform grid */}
        <ul className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] lg:grid-cols-4">
          {items.map((item, i) => {
            // First tile spans 2x2, fourth spans 2 cols — breaks the uniform reflex.
            const span =
              i === 0
                ? "col-span-2 row-span-2"
                : i === 3
                  ? "lg:col-span-2"
                  : "";
            return (
              <li
                key={item.title}
                className={`group relative overflow-hidden rounded-xl ring-1 ring-[#0E1116]/8 ${span}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#0E1116]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
                />
                <span className="absolute inset-x-0 bottom-0 translate-y-1 p-4 text-[13px] font-medium leading-snug text-white opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:translate-y-0">
                  {item.title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
