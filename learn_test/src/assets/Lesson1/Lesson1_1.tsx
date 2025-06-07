import { useState, type ChangeEvent } from 'react';

const Lesson1_1 = () => {
  const [age, setAge] = useState<number>(0);
  const [name, setName] = useState('name');

  const handleClick = () => {
    setAge(age + 1);
    //setAge((state) => state + 1); //更新関数の場合即時反映される
    // setAge((state) => state + 1);
    // setAge((state) => state + 1);
    console.log(name);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="border p-2 rounded-md bg-red-100"
      >
        Add Age
      </button>
      <p>You are {age}</p>
    </div>
  );
};

export default Lesson1_1;
