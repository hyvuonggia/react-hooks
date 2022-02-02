import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Todo from './components/Todo';
import ThemeContextProvider from './contexts/ThemeContext';
import TodoContextProvider from './contexts/TodoContext';


function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <Navbar />
                <TodoContextProvider>
                    <Todo />
                </TodoContextProvider>
                <ThemeToggle />
            </ThemeContextProvider>
        </div>
    );
}

export default App;
