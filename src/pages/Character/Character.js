import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Filter } from "../../components/Filter/Filter";
import { Pagination } from "../../components/Pagination/Pagination";
import { Search } from "../../components/Search/Search";

export const Character = () => {
  const [activePage, setActivePage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("alive");
  let api = `https://rickandmortyapi.com/api/character/?page=${activePage}&name=${search}&status=${status}`;
  const [data, setData] = useState([]);
  const { info, results } = data;

  useEffect(() => {
    (async () => {
      const data = await fetch(api).then((res) => res.json());
      setData(data);
    })();
  }, [api]);

  return (
    <>
      <h2 className="text-center h2 mb-3">Character</h2>

      <Search setSearch={setSearch} setActivePage={setActivePage} />
      <div className="row">
        <div className="col-10 col-md-3" >
          <Filter />
        </div>
        <div className="col-12 col-md-9 ">
          {results?.length ? (
            <div className="d-flex justify-content-center align-items-center gap-2 mt-3 flex-wrap">
              {results.map((item) => (
                <Card key={item.id} obj={item} />
              ))}
            </div>
          ) : (
            <h3>Not Found</h3>
          )}
        </div>
      </div>

      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        totalPage={info?.pages}
      />
    </>
  );
};
