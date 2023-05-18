// Hooks API 래퍼런스 참고해서 공부 할 것!

export default function personReducer(person, action) {
    switch (action.type) {
        case 'updated': {
            // const prev = action.prev;
            // const current = action.current;
            // 위를 축약하면 아래와 같다!
            const { prev, current } = action;
            return {
                ...person,
                mentors: person.mentors.map((mentor) => {
                    if (mentor.name === prev) {
                        return { ...mentor, name: current };
                    }
                    return mentor;
                }),
            };
        }
        case 'added': {
            const { name, title } = action;
            return {
                ...person,
                mentors: [...person.mentors, { name, title }],
            };
        }
        case 'deleted': {
            const { name, title } = action;
            return {
                ...person,
                mentors: person.mentors.filter((m) => m.name !== name),
            };
        }
        case 'dafault': {
            throw Error(`알 수 없는 액션 타입이다: ${action.type}`);
        }
    }
}
