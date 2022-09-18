export default function Test(props) {
  console.log(props);
  return (

    <div>

      <h1>Test Component</h1>
      <h2>
        {props.value}
      </h2>
    </div>

  );
}