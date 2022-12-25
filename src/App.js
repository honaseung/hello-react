import { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
// import IterationSample from './IterationSample';
// import ScrollBox from './ScrollBox';
// import ValidationSample from './ValidationSmaple';
// import EventPractice from './EventPractice';
// import EventPracticeClass from './EventPracticeClass';
// import Say from './Say';

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    state = {
        color: '#000000',
    };

    onClickBtn = () => {
        this.setState({
            color: getRandomColor(),
        });
    };

    // componentDidCatch(error, info) {
    //     console.log('componentDidCatch', error, info);
    // }

    render() {
        return (
            <>
                {/* <Say /> */}
                {/* <EventPracticeClass /> */}
                {/* <EventPractice /> */}
                {/* <ValidationSample /> */}
                {/* <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
                <button
                    onClick={() => {
                        this.scrollBox.scrollToBottom();
                    }}
                >
                    밑으로
                </button> */}
                {/* <IterationSample /> */}
                <button onClick={this.onClickBtn}>랜덤</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color} />
                </ErrorBoundary>
            </>
        );
    }
}

export default App;
