import { types, Instance } from 'mobx-state-tree';

export const Meters = types.model('Meters', {
  count: types.number,
  next: types.maybeNull(types.string),
  previous: types.maybeNull(types.string),
  results: types.array(
    types.model({
      id: types.string,
      _type: types.array(types.string),
      area: types.model({ id: types.string }),
      is_automatic: types.maybeNull(types.boolean),
      communication: types.string,
      description: types.string,
      serial_number: types.string,
      installation_date: types.string,
      brand_name: types.maybeNull(types.string),
      model_name: types.maybeNull(types.string),
      initial_values: types.array(types.number),
    })
  ),
});

export type MetersType = Instance<typeof Meters>;
export type MeterType = MetersType['results'];
