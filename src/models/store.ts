import { types, Instance, flow } from 'mobx-state-tree';
import { Meters, MetersType } from './meters';
import { Address } from './address';

export const Store = types
  .model('Store', {
    meters: types.optional(Meters, {
      count: 0,
      next: '0',
      previous: '0',
      results: [],
    }),
    address: types.array(Address),
    isLoading: types.boolean,
    offset: types.number,
  })
  .actions((self) => ({
    fetchMeters: flow(function* (offset: number = 0) {
      self.isLoading = true;
      self.offset = offset;
      try {
        const responseMeters = yield fetch(
          `http://showroom.eis24.me/api/v4/test/meters/?limit=20&offset=${offset}`
        );
        const meters: MetersType = yield responseMeters.json();

        self.meters = meters;

        const addressIDs = meters.results
          .map((el) => el.area.id)
          .filter((value: string, index: number, self: Array<string>) => {
            return self.indexOf(value) === index;
          });

        const addressPromises = yield Promise.all(
          addressIDs.map((el: string) =>
            fetch(
              `http://showroom.eis24.me/api/v4/test/areas/?id__in=${el}`
            ).then((response) => response.json())
          )
        );

        const addressResponse = addressPromises.map(
          (response: any) => response.results[0]
        );

        self.address = addressResponse;
        self.isLoading = false;
      } catch (e) {
        console.error('Failed to fetch meters:', e);
      } finally {
        self.isLoading = false;
      }
    }),
    deleteMeter: flow(function* (meterId: string) {
      self.isLoading = true;
      try {
        yield fetch(`http://showroom.eis24.me/api/v4/test/meters/${meterId}/`, {
          method: 'DELETE',
        });
      } catch (e) {
        console.error('Failed to delete meters:', e);
      } finally {
        self.isLoading = false;
      }
    }),
  }));

export type StoreType = Instance<typeof Store>;

export const storeInstance = Store.create({
  meters: {
    count: 0,
    next: '0',
    previous: '0',
    results: [],
  },
  address: [],
  isLoading: false,
  offset: 0,
});
