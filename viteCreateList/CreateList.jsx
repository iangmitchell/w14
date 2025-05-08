function CreateList(props) {
  let bulmaStyleProp = `notification ${props.style}`;
  return (
    <div class={bulmaStyleProp}>
      <h2 class="title is-2"> {props.title}</h2>
      <ol type="1">
        {props.items.map((item) => (
          <li> {item} </li>
        ))}
      </ol>
    </div>
  );
}

export default CreateList;
