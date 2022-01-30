import { mapState } from "vuex";

export function mapTypedState<State>(keys: (string & keyof State)[]) {
  type Key = typeof keys[number];
  return mapState(keys) as {
    [key in Key]: () => State[key];
  };
}
