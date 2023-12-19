interface FullDividerInterface {
  marginBottom?: string;
  marginTop?: string;
}

function FullDivider({
  marginBottom = "",
  marginTop = "",
}: FullDividerInterface) {
  return <div className={`${marginBottom} ${marginTop} bg-light-grey h-0.5`} />;
}

export default FullDivider;
