import React from 'react';


class App extends React.Component {
  render() {
    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={e => 
                this.props.store.dispatch({ type: 'ADD VOTE', 
                data: { id: anecdote.id}})}>
                vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={e => 
          this.props.store.dispatch({ type: 'NEW ANECDOTE'})}>
          <div><input /></div>
          <button type="submit">create</button> 
        </form>
      </div>
    )
  }
}

export default App