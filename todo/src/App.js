import './App.css';
import TodoList from './Components/TodoList/TodoList';
import Header from './Components/Header/Header';
import { useState } from 'react';

const filters = ['all', 'active', 'completed'];
function App() {
    const [filter, setFilter] = useState();
    return (
        <div>
            <Header
                filters={filters}
                filter={filter}
                onFilterChange={(filter) => setFilter(filter)}
            />
            <TodoList filter={filter} />
        </div>
    );
}

export default App;
