class Hello extends React.Component {
    render() {

        let bangs = "!".repeat(this.props.bangs);

        // we receieve the properties sent from the index.js Hello
        // components into props property of the Hello component
        console.log(this.props);
        return (<p>Hi {this.props.to} from {this.props.from} {bangs}

        </p>);
    }
}