class Machine extends React.Component{

    //It should be defaultProps and not any other name
    static defaultProps = {
        bangs : 2
    }
    render() {
        const { s1, s2, s3, data, bangs } = this.props;
        let bang = "!".repeat(bangs);
        let isSame = ((s1 === s2) && (s2 == s3)) ? "Win" : "Lose";
        return <div>
            <p>{this.props.s1} {this.props.s2} {this.props.s3} </p>
            <p>You {isSame} {bang}</p>
            <ul>
                {data.map(d => <li key={d}>{d}</li>)}
            </ul>
        </div>
    }
}