export default function WordsList(){
    const arr: string[] = ["happy", "sky", "bunny"];

    return (
      <div>
        <ul>
          {arr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };