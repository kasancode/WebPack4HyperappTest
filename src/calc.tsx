import { h, app } from "hyperapp"

type func = (state: State, actions?: Actions) => Partial<State>;
type operator = "+" | "-" | "*" | "/" | "";
class State {
    display: string = "0";
    memory: number = 0;
    operateor: operator = "";
    start: boolean = true;

    calc(): number {
        if (this.operateor == "")
            return Number(this.display);

        return eval(this.memory.toString() + this.operateor + this.display);
    }
}

class Actions implements Hyperapp.ActionsType<State, Actions> {
    setNum(v: number | "."): func {
        return (state) => {
            if (v == "." && state.display.indexOf(".") >= 0)
                return state;

            if (v == 0 && state.display == "0")
                return state;

            let keyLog = "";
            if (state.start || state.display == "0") {
                if (v == ".")
                    keyLog = "0."
                else
                    keyLog = v.toString();
            }
            else
                keyLog = state.display + v;

            return {
                display: keyLog,
                start: false,
            };
        };
    }

    setOperator(op: operator): func {
        return (state) => {
            let val = state.calc();

            return {
                display: val.toString(),
                memory: val,
                operateor: op,
                start: true,
            };
        };
    }

    calc(): func {
        return (state) => {
            let val = state.calc();

            return {
                display: val.toString(),
                memory: val,
                operateor: "",
                start: true,
            };
        };
    }

    reset(): func {
        return (state) => {
            return {
                display: "0",
                memory: 0,
                operateor: "",
                start: true,
            };
        };
    }
}


const NumKey = (arg: { num: number | ".", act: Actions }) => (
    <td class="btn" onclick={() => arg.act.setNum(arg.num)}>{arg.num.toString()}</td>
);
const OpKey = (arg: { op: operator, act: Actions }) => (
    <td class="btn" onclick={() => arg.act.setOperator(arg.op)}>{arg.op}</td>
);

const state = new State();
const actions = new Actions();

const view: Hyperapp.View<State, Actions> = (state, actions) => (
    <div>
        <table>
            <tr>
                <td colspan="3" class="num-dsp">{state.display}</td>
                <td class="op-dsp">{state.operateor}</td>
            </tr>
            <tr>
                <td class="btn" onclick={() => actions.reset()}>C</td>
                <td></td>
                <td></td>
                <OpKey op={"/"} act={actions} />
            </tr>
            <tr>
                <NumKey num={7} act={actions} />
                <NumKey num={8} act={actions} />
                <NumKey num={9} act={actions} />
                <OpKey op={"*"} act={actions} />
            </tr>
            <tr>
                <NumKey num={4} act={actions} />
                <NumKey num={5} act={actions} />
                <NumKey num={6} act={actions} />
                <OpKey op={"-"} act={actions} />
            </tr>
            <tr>
                <NumKey num={1} act={actions} />
                <NumKey num={2} act={actions} />
                <NumKey num={3} act={actions} />
                <OpKey op={"+"} act={actions} />
            </tr>
            <tr>
                <NumKey num={"."} act={actions} />
                <NumKey num={0} act={actions} />
                <td colspan="2" class="btn" onclick={() => actions.calc()}>＝</td>
            </tr>
        </table>
    </div>
)

app(state, actions, view, document.body)