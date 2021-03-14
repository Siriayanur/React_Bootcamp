class App extends React.Component {
    render() {
        return <div>
            <h1>Slot Machines</h1>
            <Machine
                s1="a"
                s2="b"
                s3="c"
                data={["apple", "orange", "grapes"]}
                bangs={3}
            />
            <Machine
                s1="a"
                s2="a"
                s3="a"
                data={["pines","jackfruit"]}

            />
            <Machine
                s1="A"
                s2="a"
                s3="a"
                data={["orange","chickoo"]}

            />
            
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));