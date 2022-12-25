import { Component } from 'react';

class LifeCycleSample extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    state = {
        number: 0,
        color: null,
    };

    myRef = null;

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }

    componentDidMount() {
        console.log('componenetDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    onClickBtn = () => {
        this.setState({
            number: this.state.number + 1,
        });
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트되기 직전 색상: ', snapshot);
        }
    }

    render() {
        console.log('render');
        const style = {
            color: this.props.color,
        };
        return (
            <>
                {this.props.missing.value}
                <h1 style={style} ref={(ref) => (this.myRef = ref)}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.onClickBtn}>1 더하기</button>
            </>
        );
    }
}

export default LifeCycleSample;
