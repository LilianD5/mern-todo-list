function App() {
    return (
        <div className="App">
            <h1>Welcome, Trou Duc</h1>
            <h3>Your tasks</h3>

            <div className="tasks">
				<div className="task">
					<div className="checkbox"></div>

					<div className="description"><p>Get the bread</p></div>

					<div className="delete-task"><img src="../icons/delete.svg" alt="delete-icon" className="delete-icon" /></div>
				</div>
				<div className="task is-complete">
					<div className="checkbox"></div>

					<div className="description"><p>Get the milk</p></div>

					<div className="delete-task"><img src="../icons/delete.svg" alt="delete-icon" className="delete-icon" /></div>
				</div>
			</div>
        </div>
    );
}

export default App;
