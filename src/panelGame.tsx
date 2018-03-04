
import {h, app} from "hyperapp";

type func = (state: State, actions?: Actions) => Partial<State>;

class State {
  constructor(size: number) {
    this.panel = [];
    for (let x = 0; x < size; x++) {
      this.panel.push([]);
      for (let y = 0; y < size; y++) {
        this.panel[x].push(false);
      }
    }
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        if (Math.random() > 0.5)
          toggleFive(x, y, this.panel);
      }
    }
  }
  panel: boolean[][];
}

function toggleFive(x: number, y: number, panel: boolean[][]) {
  toggleOne(x, y, panel);
  toggleOne(x - 1, y, panel);
  toggleOne(x, y - 1, panel);
  toggleOne(x + 1, y, panel);
  toggleOne(x, y + 1, panel);
}

function toggleOne(x: number, y: number, panel: boolean[][]) {
  if (x < 0 || x >= panel.length || y < 0 || y >= panel.length)
    return;

  panel[x][y] = !panel[x][y];
}

class Actions implements Hyperapp.ActionsType<State, Actions> {
  push(arg: { x: number, y: number }): func {
    return (state) => {
      toggleFive(arg.x, arg.y, state.panel);

      return {
        panel: state.panel,
      };
    };
  }

  resize(size: number): func {
    return (state) => {
      return new State(size);
    };
  }
}

const state = new State(4);
const actions = new Actions();

const Resize = (arg: { size: number, act: Actions }) => (
  <button onclick={() => arg.act.resize(arg.size)}> {arg.size} x {arg.size} </button>
);

const view: Hyperapp.View<State, Actions> = (state, actions) => (
  <div>
    <Resize size={4} act={actions} />
    <Resize size={5} act={actions} />
    <Resize size={6} act={actions} />
    <table>
      {state.panel.map((row, x) => (
        <tr>
          {row.map((p, y) => (
            <td class={p ? "on" : "off"} onclick={() => actions.push({ x, y })}> </td>
          ))}
        </tr>
      ))}
    </table>
  </div>
);

app(state, actions, view, document.body);