import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment} from '../src/redux/slice/counterSlice'
import { selectcounter } from '../src/redux/slice/counterSlice'


function App() {
  const count = useSelector(selectcounter)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
