
import AddTodo from "./components/AddTodo";
import ContentWrapper from "./components/ContentWrapper";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
function App() {
  return (
    <center>
        <ContentWrapper>
          <Header/>
          <AddTodo/>
          <TodoList/>
      </ContentWrapper>
    </center>
  )
}

export default App
