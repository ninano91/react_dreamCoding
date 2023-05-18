import React, { useState } from 'react';

export default function AppMentor(props) {
    const [person, setPerson] = useState({
        name: '엘리',
        title: '개발자',
        mentor: {
            name: '밥',
            title: '시니어개발자',
        },
    });
    const obj = {
        name: '엘리',
        title: '개발자',
        mentor: {
            name: '밥',
            title: '시니어개발자',
        },
    };
    const name = '업데이트 이름';
    const update = {
        ...obj,
        mentor: { ...obj.mentor, name: name },
        // 스프레드 연산자를 이용한 js문법 !!
        //
        // ...으로 스프레드 연산자를 이용해서 객체를 복사해서 불러오고,
        // mentor라는 걸 덮어씌어준다.
        // mentor에는 객체가 있는데, 그중에 name이라는 변수에 업데이트 해서 덮어씌어준다.
    };
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는 {person.mentor.name} (
                {person.mentor.title})
            </p>
            <button
                onClick={() => {
                    const name = prompt(`멘토의 이름을 입력하세요`);
                    setPerson((person) => ({
                        ...person,
                        mentor: { ...person.mentor, name: name },
                    }));
                }}
            >
                멘토 이름 바꾸기
            </button>
            <button
                onClick={() => {
                    const title = prompt(`멘토의 타이틀을 입력하세요`);
                    setPerson((person) => ({
                        ...person,
                        mentor: { ...person.mentor, title: title },
                    }));
                }}
            >
                멘토 타이틀 바꾸기
            </button>
        </div>
    );
}
