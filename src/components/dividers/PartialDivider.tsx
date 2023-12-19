interface PartialDividerInterface {
  marginBottom?: string;
  marginTop?: string;
}

function PartialDivider({
  marginBottom = "mb-[72px]",
  marginTop = "mt-[72px]",
}: PartialDividerInterface) {
  return (
    <div
      className={`${marginBottom} ${marginTop} bg-light-grey rounded h-px w-11/12 mx-auto`}
    />
  );
}

export default PartialDivider;
