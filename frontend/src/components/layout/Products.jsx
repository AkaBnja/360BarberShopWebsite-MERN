import React, { useEffect } from "react";
import MetaData from "./MetaData";
import { useGetProductsQuery } from "../../redux/api/productsApi";
import ProductItem from "../product/ProductItem";
import Loader from "./Loader";
import toast from "react-hot-toast";
import CustomPagination from "./CustomPagination";
import { useSearchParams } from "react-router-dom";
import Filters from "./Filters";

const Products = () => {
  let [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const min = searchParams.get("min");
  const max = searchParams.get("max");
  const category = searchParams.get("category");
  const ratings = searchParams.get("ratings");

  const params = { page };

  min !== null && (params.min = min);
  max !== null && (params.max = max);
  category !== null && (params.category = category);
  ratings !== null && (params.ratings = ratings);

  const { data, isLoading, error, isError } = useGetProductsQuery(params);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError]);

  const columnSize = 4;

  if (isLoading) return <Loader />;

  return (
    <>
      <MetaData title={"Buy Best Products Online"} />
      <div className="flex row sm:ml-2 lg:flex-row sm:flex-col px-2">
        <div className="col-12 md:col-3 lg:w-[30%]">
          {/* Filtrado arriba en dispositivos md y más grandes */}
          <Filters />
        </div>
        <div className="col-12 md:col-9 lg:w-[70%]">
          {/* Productos abajo en dispositivos md y más grandes */}
          <section id="products" className="mt-5">
            <div className="row">
              {data?.products?.map((product) => (
                <ProductItem product={product} columnSize={columnSize} />
              ))}
            </div>
          </section>

          <CustomPagination
            resPerPage={data?.resPerPage}
            filteredProductsCount={data?.filteredProductsCount}
          />
        </div>
      </div>
    </>
  );
};

export default Products;