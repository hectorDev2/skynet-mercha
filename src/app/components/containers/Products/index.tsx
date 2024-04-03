import Link from "next/link";
import { CardProductEx } from "./CardProductEx";

export function Products({
  title = "polos",
  tshirts,
  color = "hsla(205, 46%, 10%, 1)",
}: any) {
  return (
    <div
      style={{ background: color }}
      className="py-[50px] px-[10px] md:px-[100px] "
    >
      <div className="flex text-center justify-evenly">
        <div className="text-center">
          <p className="games-label text-[var(--primary)]">Merchandising</p>
          {title}
        </div>
      </div>
      <div className=" flex flex-col justify-center md:flex-row md:flex-wrap items-center gap-2 py-5">
        {tshirts &&
          tshirts?.map((tshirt: any) => (
            <Link key={tshirt?.name} href={`/productos/${tshirt?.id}`}>
              <CardProductEx
                image={tshirt?.images[0]?.url ?? ""}
                product={tshirt}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
