import React from 'react';

class App extends React.Component {

  addAnecdote = (event) => {
    event.preventDefault()
    this.props.store.dispatch({ 
      type: 'NEW ANECDOTE', 
      data: { content: event.target.anecdote.value } 
    })
    event.target.anecdote.value = ''
  }

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
        <form onSubmit={event => this.addAnecdote(event)}>
          <div><input name="anecdote"/></div>
          <button type="submit">create</button> 
        </form>
      </div>
    )
  }
}

export default App