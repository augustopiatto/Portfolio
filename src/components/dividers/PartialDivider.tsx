interface PartialDivider {
  marginBottom: string;
  marginTop: string;
}

function PartialDivider({ marginBottom, marginTop }: PartialDivider) {
  return (
    <div
      className={`${marginBottom} ${marginTop} bg-light-grey rounded h-px w-11/12 mx-auto`}
    />
  );
}

export default PartialDivider;
