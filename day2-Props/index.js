class App extends React.Component{
    render() {
        return (
            <div>
                <Hello
                    to="Meera"
                    from="Siri"
                    num={3}
                    data={[1, 2, 3, 4, 5]}
                    isFunny={true}
                    isDone
                    bangs={4}
                />
                <Hello
                    to="Mukund"
                    from="Siri"
                    num={3}
                    data={[1, 2, 3, 4, 5]}
                    isFunny={true}
                    isDone
                    bangs={10}
                />
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));