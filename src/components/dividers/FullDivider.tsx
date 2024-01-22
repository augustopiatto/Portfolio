interface FullDividerInterface {
  marginBottom?: string;
  marginTop?: string;
}

function FullDivider({
  marginBottom = "",
  marginTop = "",
}: FullDividerInterface) {
  return <div className={`${marginBottom} ${marginTop} bg-highlight h-0.5`} />;
}

export default FullDivider;
