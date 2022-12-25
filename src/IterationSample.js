import { useState } from 'react';

const IterationSample = () => {
    const [nameStrList, setNmaeStrList] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setnextId] = useState(5);

    const onChangeIpb = (e) => {
        setInputText(e.target.value);
    };

    const onClickBtn = () => {
        setNmaeStrList([...nameStrList, { id: nextId, text: inputText }]);
        setnextId(nextId + 1);
        setInputText('');
    };

    const onDoubleClickLi = (id) => {
        setNmaeStrList(nameStrList.filter((el) => el.id !== id));
        // setnextId(nextId - 1);
    };

    const nameJSXList = nameStrList.map((el, idx) => (
        <li key={el.id} onDoubleClick={() => onDoubleClickLi(el.id)}>
            {el.text}
        </li>
    ));
    return (
        <>
            <input
                type="text"
                name="inputText"
                value={inputText}
                onChange={onChangeIpb}
            />
            <button onClick={onClickBtn}>항목 추가</button>
            <ul>{nameJSXList}</ul>
        </>
    );
};

export default IterationSample;
