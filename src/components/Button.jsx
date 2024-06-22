export default function Button({btnType,children,onClickTask}) {
  
  return (
    <>
      <button onClick={onClickTask} className={`btn ${btnType==="secondary"?"btn--secondary":""}`}>{children}</button>
    </>
  );
}
