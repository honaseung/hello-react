import { useState } from 'react';

const EventPractice = () => {
    // const [message, setMessage] = useState('');
    // const [username, setUsername] = useState('');

    const [form, setForm] = useState({
        username: '',
        message: '',
    });

    const { username, message } = form;

    // const onChangeIpb = (e) => {
    //     if (e.target.name === 'username') {
    //         setUsername(e.target.value);
    //     } else if (e.target.name === 'message') {
    //         setMessage(e.target.value);
    //     }
    // };

    // const onClickBtn = () => {
    //     alert(username + ': ' + message);
    //     setMessage('');
    //     setUsername('');
    // };

    const onChangeIpb = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onClickBtn = (e) => {
        alert(username + ': ' + message);
        setForm({
            // ...form,
            username: '',
            message: '',
        });
    };

    const onKeyUp = (e) => {
        if (e.key === 'Enter') {
            onClickBtn();
        }
    };

    return (
        <>
            <input
                type="text"
                name="username"
                onChange={onChangeIpb}
                value={username}
            />
            <input
                type="text"
                name="message"
                onChange={onChangeIpb}
                onKeyUp={onKeyUp}
                value={message}
            />
            <button onClick={onClickBtn}>나를 클릭해 보세요!</button>
        </>
    );
};

export default EventPractice;
