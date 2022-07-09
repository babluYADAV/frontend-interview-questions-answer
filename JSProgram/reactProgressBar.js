import React from "react";

const reactProgressBar = () => {
  const [value, updatedValue] = useState(0);

  React.useEffect(() => {
    const inetrval = setInterval(() => {
      updatedValue((oldValue) => {
        const newValue = oldValue + 10;
        if (newValue === 100) {
          clearInterval(inetrval);
        }
        return newValue;
      });
    }, 1000);
  }, []);

  return (
    <div>
      <progress value={value} />
    </div>
  );
};

export default reactProgressBar;
