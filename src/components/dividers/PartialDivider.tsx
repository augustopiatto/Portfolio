interface PartialDividerInterface {
  marginBottom?: string;
  marginTop?: string;
}

function PartialDivider({
  marginBottom = "",
  marginTop = "",
}: PartialDividerInterface) {
  return (
    <div
      className={`${marginBottom} ${marginTop} bg-title rounded h-px w-11/12 mx-auto`}
    />
  );
}

export default PartialDivider;
