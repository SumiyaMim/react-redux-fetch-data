import React, { useEffect } from 'react'
import { getAllTodos } from '../services/actions';
import { useDispatch, useSelector } from 'react-redux';

const Todos = () => {

    const { isLoading, todos, error } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

  return (
    <div>
      <h1>TODO APP</h1>
      {isLoading && <h3>Loading ...</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {todos && todos.map((todo) => {
            return (
              <article key={todo.id}>
                <h3>{todo.id}</h3>
                <p>{todo.title}</p>
              </article>
            );
          })}
      </section>
    </div>
  )
}

export default Todos


// Steps
// install packages
// constants define
// async action creator
// reduce 
// create store
// provide store
// use store
// adding css