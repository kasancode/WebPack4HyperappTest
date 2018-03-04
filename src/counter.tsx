import { h, app } from "hyperapp"

type func = (state: State, actions?: Actions) => Partial<State>;

class State {
  count: number = 0;
}

class Actions implements Hyperapp.ActionsType<State, Actions> {
  down(value: number): func {
    return (state: State) => ({ count: state.count - value });
  }
  up(value: number): func {
    return (state: State) => ({ count: state.count + value });
  }
}

const state = new State();
const actions = new Actions();

const view: Hyperapp.View<State, Actions> = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={()=>actions.down(1)} disabled={state.count<=0}>-</button>
    <button onclick={()=>actions.up(1)}>+</button>  
  </div>
)

app(state, actions, view, document.body)