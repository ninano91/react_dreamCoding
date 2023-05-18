import React, { useState } from 'react';

export default function AppMentor() {
    const [person, setPerson] = useState({
        // 여기서 person은 불변성을 가지는 걸로 만들어야한다!
        // * 객체의 가변성와 불변성에 대해 공부하는것으로 참고!
        // ex
        // person.mentors[0].name = current;
        // setPerson(person);
        // 작동하지 않음! 이유?
        // 객체마다 고유한 참조값(레퍼런스 값)이 만들어지는데,
        // 이런 무언가의 새로운 참조값이 만들어져야지 변경이 되었음을 알고 업뎃함!
        // why? 참조값이 동일한 상태에서는 리액트가 동일한 객체로 취급해버림...!

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
    });
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
            <button
                onClick={() => {
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
                }}
            >
                멘토의 이름을 바꾸기
            </button>
        </div>
    );
}
