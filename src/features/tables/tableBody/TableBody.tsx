import { Table } from '../../../components/ui/table/table';
import { Hot } from '../../../assets/icons/Hot';
import { Cold } from '../../../assets/icons/Cold';
import { MeterType } from '../../../models/meters';
import { AddressType } from '../../../models/address';
import { Trash } from '../../../assets/icons/Trash';
import { St } from '../../../components/ui/table/tableStyledComponennts';

type Props = {
  meters: MeterType;
  address: AddressType[];
  isLoading: boolean;
  deleteCallBack: (id: string) => void;
};
// Не смог реализовать скролл внутри body таблицы

export const TableBody = ({
  meters,
  address,
  isLoading,
  deleteCallBack,
}: Props) => {
  return (
    <Table.Body>
      {meters.map((el, i) => (
        <Table.Row key={el.id}>
          <Table.Cell style={{ width: '3.31%' }}>{i + 1}</Table.Cell>
          <Table.Cell style={{ width: '7.18%' }}>
            {el._type[0] === 'HotWaterAreaMeter' ? <Hot /> : <Cold />}
          </Table.Cell>
          <Table.Cell style={{ width: '12.01%' }}>
            {new Date(el.installation_date).toLocaleDateString('ru-RU')}
          </Table.Cell>
          <Table.Cell style={{ width: '12.74%' }}>
            {el.is_automatic ? 'да' : 'нет'}
          </Table.Cell>
          <Table.Cell style={{ width: '14.77%' }}>
            {el.initial_values}
          </Table.Cell>
          <Table.Cell style={{ width: '35.9%' }}>
            {address.map((address) => {
              return address.id === el.area.id
                ? address.house.address + '' + address.str_number_full
                : '';
            })}
          </Table.Cell>
          <Table.Cell style={{ width: '9.82%' }}>{el.description}</Table.Cell>
          <Table.Cell style={{ width: '4.26%' }}>
            <St.DeleteCellButton
              className={isLoading ? 'disabled' : ''}
              disabled={isLoading}
              onClick={() => deleteCallBack(el.id)}
            >
              <Trash />
            </St.DeleteCellButton>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};
