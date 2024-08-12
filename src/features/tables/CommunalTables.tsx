import { Table } from '../../components/ui/table/table';
import { observer } from 'mobx-react-lite';
import { storeInstance } from '../../models/store';
import { TableHead } from './tableHead/TableHead';
import { TableBody } from './tableBody/TableBody';
import { St } from '../../components/ui/table/tableStyledComponennts';
import { fakeAddress, fakeApi } from './tableHeaderName';

export const CommunalTables = observer(() => {
  const deleteMeterHandler = (id: string) => {
    storeInstance.deleteMeter(id).then(() => {
      storeInstance.fetchMeters(storeInstance.offset);
    });
  };

  return (
    <>
      <Table.Root>
        <TableHead />
      </Table.Root>
      <St.ScrollTableWrapper>
        <Table.Root>
          <TableBody
            address={storeInstance.address}
            deleteCallBack={deleteMeterHandler}
            isLoading={storeInstance.isLoading}
            meters={storeInstance.meters.results}
          />
        </Table.Root>
      </St.ScrollTableWrapper>
    </>
  );
});
