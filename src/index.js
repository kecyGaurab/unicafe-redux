import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counterReducer from './reducer'

const store = createStore(counterReducer)

const App = ({store}) => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })}
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })}
  const neutral = () => {
    store.dispatch({
      type: 'DO_NOTHING'
    })}
  const reset = () => {
    store.dispatch({
      type: 'RESET'
    })}
  
console.log('store', store.getState())
  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={neutral}>neutral</button>
      <button onClick={bad}>bad</button>
      <button onClick={reset}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad  {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)