import { useEffect, useRef } from 'react';
import { Table } from '../../../components/ui/table/table';
import { tableHeaderName } from '../tableHeaderName';
import { storeInstance } from '../../../models/store';

// Не смог реализовать скролл внутри body таблицы

export const TableHead = () => {
  return (
    <Table.Head>
      <Table.Row className="noHover">
        <Table.HeaderCell style={{ width: '3.31%' }}>№</Table.HeaderCell>
        <Table.HeaderCell style={{ width: '7.18%' }}>Тип</Table.HeaderCell>
        <Table.HeaderCell style={{ width: '12.01%' }}>
          Дата установки
        </Table.HeaderCell>
        <Table.HeaderCell style={{ width: '12.74%' }}>
          Автоматический
        </Table.HeaderCell>
        <Table.HeaderCell style={{ width: '14.77%' }}>
          Текущие показания
        </Table.HeaderCell>
        <Table.HeaderCell style={{ width: '35.9%' }}>Адрес</Table.HeaderCell>
        <Table.HeaderCell style={{ width: '9.82%' }}>
          Примечание
        </Table.HeaderCell>
        <Table.HeaderCell style={{ width: '4.26%' }}></Table.HeaderCell>
      </Table.Row>
    </Table.Head>
  );
};
// <>
//   <Table.Head>
//     <Table.Row className="noHover">
//       {tableHeaderName.map((el, index) => (
//         <Table.HeaderCell
//           ref={(ref) => {
//             if (ref) a.push(ref?.getBoundingClientRect().width);
//           }}
//           key={el.key}
//         >
//           {el.title}
//         </Table.HeaderCell>
//       ))}
//     </Table.Row>
//   </Table.Head>
// </>
