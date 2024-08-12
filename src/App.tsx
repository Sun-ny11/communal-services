import './App.css';
import { CommunalTables } from './features/tables/CommunalTables';
import { Pagination } from './components/ui/pagination/pagination';
import { observer } from 'mobx-react-lite';
import { storeInstance } from './models/store';
import { useEffect, useState } from 'react';
import { St } from './components/ui/table/tableStyledComponennts';

export const App = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    storeInstance.fetchMeters(20 * (currentPage - 1));
  }, [currentPage]);

  return (
    <>
      <St.TableWrapper>
        <CommunalTables />
        <Pagination
          currentPage={currentPage}
          pageSize={20}
          totalCount={storeInstance.meters.count}
          onPageChange={setCurrentPage}
          isLoading={storeInstance.isLoading}
        />
      </St.TableWrapper>
    </>
  );
});
