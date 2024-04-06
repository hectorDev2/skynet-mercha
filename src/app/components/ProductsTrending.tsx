import Link from "next/link";
import { CardProductEx } from "./containers/Products/CardProductEx";

const ProductsTrending = ({ products = [] }) => {
  const tshirtFilter = products?.filter(
    (tshirt: any) => tshirt.label == "tendencia"
  );

  return (
    <div
      style={{ background: "hsla(205, 46%, 10%, 1)" }}
      className="py-[50px] px-[10px] md:px-[100px] "
    >
      <div className="flex text-center justify-evenly">
        <div className="text-center">
          <p className="games-label text-[var(--primary)]">Merchandising</p>
          <h2 className="text-3xl font-bold">Productos en Tendencia</h2>
        </div>
      </div>
      <div className=" flex flex-col justify-center md:flex-row md:flex-wrap items-center gap-2 py-5">
        {tshirtFilter &&
          tshirtFilter.reverse()?.map((tshirt: any) => (
            <Link key={tshirt?.name} href={`/polos/${tshirt?.id}`}>
              <CardProductEx
                image={tshirt?.images[0]?.url ?? ""}
                product={tshirt}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProductsTrending;
