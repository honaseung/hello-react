import { Component } from 'react';
import IterationSample from './IterationSample';
// import ScrollBox from './ScrollBox';
// import ValidationSample from './ValidationSmaple';
// import EventPractice from './EventPractice';
// import EventPracticeClass from './EventPracticeClass';
// import Say from './Say';

class App extends Component {
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
                <IterationSample />
            </>
        );
    }
}

export default App;
