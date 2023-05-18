import React, { useReducer, useState } from 'react';

export default function AppMentor() {
    const [person, setPerson] = useState(initialPerson);

    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
                if (mentor.name === prev) {
                    return { ...mentor, name: current };
                }
                return mentor;
            }),
        }));
    };

    const handleAdd = () => {
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        setPerson((person) => ({
            ...person,
            mentors: [...person.mentors, { name, title }],
            // 배열 뒤가 아닌 앞에 추가하고 싶다면?
            // mentors: [{ name, title }, ...person.mentors],
        }));
    };

    const handleDelete = () => {
        const name = prompt(`누구를 삭제하고 싶은가욧?`);
        setPerson((person) => ({
            ...person,
            mentors: person.mentors.filter((m) => m.name !== name),

            // 객체를 변경하기 위해 복잡하기 때문에,
            // 상태관리 라이브러리인 redux나, mobx, immer를 사용했었다고 함.
            // 현재는 최신 리액트의 훅을 사용해서 상태관리를 간편하게 할 수 있다!
            // 최근은 context, usestate, usereducer을 통해 관리하는편?!
        }));
    };

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>{person.name}의 멘토는:</p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button onClick={handleAdd}>멘토 추가하기</button>
            <button onClick={handleDelete}>멘토 삭제하기</button>
            <button onClick={handleUpdate}>멘토의 이름 바꾸기</button>
        </div>
    );
}

const initialPerson = {
    name: '엘리',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어개발자',
        },
        {
            name: '제임스',
            title: '시니어개발자',
        },
    ],
};
